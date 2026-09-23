// 온라인 대전 중계 서버 (연결 테스트용 최소 버전)
export class GameRoom {
  constructor(state) { this.state = state; this.sockets = []; }
  async fetch(request) {
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.accept();
    this.sockets.push(server);
    server.send(JSON.stringify({ t: "welcome", peers: this.sockets.length }));
    server.addEventListener("message", (e) => {
      for (const s of this.sockets) {
        if (s !== server) { try { s.send(e.data); } catch (err) {} }
      }
    });
    server.addEventListener("close", () => {
      this.sockets = this.sockets.filter((s) => s !== server);
    });
    return new Response(null, { status: 101, webSocket: client });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/health") return new Response("ok");
    const room = url.searchParams.get("room") || "TEST";
    const id = env.ROOMS.idFromName(room);
    return env.ROOMS.get(id).fetch(request);
  }
};
