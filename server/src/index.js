// 온라인 대전 중계 서버
// 방 코드마다 Durable Object 하나가 생겨 두 클라이언트를 이어준다.
// WebSocket Hibernation API 를 쓰면 대기 시간이 길어 객체가 잠들어도 연결이 유지된다.
export class GameRoom {
  constructor(state) {
    this.state = state;
  }

  async fetch(request) {
    if (request.headers.get("Upgrade") !== "websocket") {
      return new Response("expected websocket", { status: 426 });
    }
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);

    // 잠들어도 연결이 끊기지 않도록 hibernation 방식으로 수락한다
    this.state.acceptWebSocket(server);

    const peers = this.state.getWebSockets().length;
    try {
      server.send(JSON.stringify({ t: "welcome", peers: peers }));
    } catch (e) {}

    return new Response(null, { status: 101, webSocket: client });
  }

  // 받은 메시지를 상대에게 그대로 전달한다 (서버는 게임 규칙을 모른다)
  webSocketMessage(ws, data) {
    for (const s of this.state.getWebSockets()) {
      if (s !== ws) {
        try { s.send(data); } catch (e) {}
      }
    }
  }

  webSocketClose(ws) {
    for (const s of this.state.getWebSockets()) {
      if (s !== ws) {
        try { s.send(JSON.stringify({ t: "bye" })); } catch (e) {}
      }
    }
  }

  webSocketError(ws) {
    try { ws.close(1011, "error"); } catch (e) {}
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/health") return new Response("ok");
    const room = (url.searchParams.get("room") || "LOBBY").toUpperCase().slice(0, 8);
    const id = env.ROOMS.idFromName(room);
    return env.ROOMS.get(id).fetch(request);
  }
};
