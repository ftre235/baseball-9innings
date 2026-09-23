const TEAM_DATA = [
  { short: "SEO", name: "서울 스타즈", color: "#f7f8fa", dark: "#16305a",
    batters: [
      ["하민재", 0.77, 0.47, 0.84, "L"],
      ["성도경", 0.75, 0.50, 0.82, "R"],
      ["문우진", 0.71, 0.88, 0.50, "L"],
      ["서인성", 0.71, 0.87, 0.47, "L"],
      ["허라온", 0.75, 0.91, 0.49, "R"],
      ["곽현준", 0.70, 0.64, 0.58, "R"],
      ["송유준", 0.74, 0.70, 0.66, "L"],
      ["남인성", 0.69, 0.50, 0.71, "R"],
      ["황시윤", 0.65, 0.50, 0.73, "L"]
    ],
    pitchers: [
      ["선발 안건우", 98, 0.82, ["fastball", "slider", "curve", "change"], "L", "overhand"],
      ["중간 김도경", 49, 0.76, ["fastball", "slider", "change"], "R", "threequarter"],
      ["중간 구성민", 46, 0.75, ["fastball", "twoseam", "fork"], "R", "sidearm"],
      ["마무리 성준호", 36, 0.82, ["fastball", "slider", "twoseam"], "L", "threequarter"]
    ] },
  { short: "BUS", name: "부산 웨이브", color: "#9e2733", dark: "#2c0a10",
    batters: [
      ["백시우", 0.73, 0.53, 0.73, "R"],
      ["신은우", 0.73, 0.52, 0.78, "L"],
      ["정시윤", 0.72, 0.93, 0.48, "R"],
      ["유도윤", 0.70, 0.89, 0.49, "R"],
      ["전인성", 0.71, 0.95, 0.43, "R"],
      ["강도경", 0.70, 0.69, 0.60, "R"],
      ["양하준", 0.68, 0.73, 0.56, "L"],
      ["한태양", 0.67, 0.60, 0.65, "L"],
      ["곽하준", 0.64, 0.62, 0.71, "L"]
    ],
    pitchers: [
      ["선발 홍민재", 103, 0.84, ["fastball", "change", "curve", "cutter"], "L", "overhand"],
      ["중간 윤연우", 48, 0.73, ["fastball", "cutter", "slider", "change"], "R", "threequarter"],
      ["중간 차현준", 38, 0.73, ["fastball", "twoseam", "fork"], "R", "sidearm"],
      ["마무리 강연우", 36, 0.81, ["twoseam", "fork", "curve", "change"], "R", "threequarter"]
    ] },
  { short: "DAE", name: "대구 라이온하트", color: "#1f4e79", dark: "#0d2036",
    batters: [
      ["하서준", 0.75, 0.44, 0.76, "R"],
      ["임찬영", 0.75, 0.47, 0.84, "R"],
      ["노태양", 0.74, 0.86, 0.52, "L"],
      ["배예준", 0.75, 0.84, 0.51, "R"],
      ["차도현", 0.75, 0.83, 0.52, "R"],
      ["구준서", 0.67, 0.68, 0.56, "L"],
      ["남도경", 0.71, 0.63, 0.58, "R"],
      ["배현준", 0.67, 0.52, 0.71, "R"],
      ["한유준", 0.68, 0.48, 0.67, "R"]
    ],
    pitchers: [
      ["선발 배선우", 108, 0.86, ["fastball", "slider", "twoseam"], "R", "overhand"],
      ["중간 권승현", 51, 0.77, ["fastball", "slider", "curve", "change"], "L", "threequarter"],
      ["중간 황인성", 45, 0.85, ["twoseam", "fork", "curve", "change"], "R", "submarine"],
      ["마무리 권재민", 46, 0.84, ["fastball", "change", "curve", "cutter"], "R", "threequarter"]
    ] },
  { short: "INC", name: "인천 에어로스", color: "#2e7d6b", dark: "#10352d",
    batters: [
      ["송태양", 0.80, 0.44, 0.87, "L"],
      ["권윤성", 0.76, 0.48, 0.82, "R"],
      ["신성민", 0.72, 0.79, 0.52, "R"],
      ["백서준", 0.72, 0.85, 0.58, "R"],
      ["전예준", 0.73, 0.79, 0.51, "R"],
      ["서태양", 0.73, 0.59, 0.68, "L"],
      ["류태양", 0.73, 0.66, 0.66, "R"],
      ["권수호", 0.66, 0.50, 0.82, "R"],
      ["차서진", 0.67, 0.46, 0.75, "R"]
    ],
    pitchers: [
      ["선발 조인성", 102, 0.80, ["fastball", "slider", "curve", "change"], "R", "overhand"],
      ["중간 유정우", 45, 0.70, ["fastball", "change", "curve", "cutter"], "R", "sidearm"],
      ["중간 신지후", 42, 0.78, ["fastball", "slider", "change"], "R", "sidearm"],
      ["마무리 강하람", 36, 0.80, ["fastball", "change", "curve", "cutter"], "L", "threequarter"]
    ] },
  { short: "GWA", name: "광주 타이푼", color: "#c8102e", dark: "#3d0710",
    batters: [
      ["심선우", 0.77, 0.58, 0.86, "R"],
      ["오준서", 0.76, 0.53, 0.79, "R"],
      ["배주원", 0.72, 0.92, 0.45, "R"],
      ["허지후", 0.71, 0.97, 0.49, "R"],
      ["조윤성", 0.73, 0.95, 0.48, "R"],
      ["민연우", 0.67, 0.74, 0.60, "L"],
      ["유지후", 0.70, 0.73, 0.63, "R"],
      ["양지훈", 0.64, 0.61, 0.72, "R"],
      ["장현우", 0.64, 0.54, 0.67, "R"]
    ],
    pitchers: [
      ["선발 장태양", 100, 0.78, ["fastball", "curve", "fork"], "L", "overhand"],
      ["중간 우하준", 48, 0.75, ["fastball", "slider", "curve", "change"], "R", "threequarter"],
      ["중간 황지훈", 43, 0.72, ["fastball", "cutter", "slider", "change"], "L", "sidearm"],
      ["마무리 심건우", 34, 0.77, ["twoseam", "fork", "curve", "change"], "L", "overhand"]
    ] },
  { short: "DJN", name: "대전 이글스타", color: "#e08a2e", dark: "#4a2a08",
    batters: [
      ["황라온", 0.78, 0.43, 0.78, "R"],
      ["우지환", 0.82, 0.49, 0.84, "R"],
      ["류윤성", 0.79, 0.85, 0.49, "R"],
      ["구시윤", 0.77, 0.82, 0.43, "R"],
      ["오서준", 0.78, 0.81, 0.41, "L"],
      ["노하람", 0.77, 0.64, 0.63, "R"],
      ["배유준", 0.74, 0.63, 0.54, "R"],
      ["황하람", 0.69, 0.49, 0.71, "R"],
      ["홍태양", 0.70, 0.46, 0.67, "R"]
    ],
    pitchers: [
      ["선발 류준호", 98, 0.86, ["twoseam", "fork", "curve", "change"], "R", "overhand"],
      ["중간 이성민", 42, 0.77, ["fastball", "slider", "twoseam"], "R", "threequarter"],
      ["중간 류하람", 39, 0.75, ["fastball", "change", "curve", "cutter"], "R", "sidearm"],
      ["마무리 신준호", 37, 0.83, ["twoseam", "fork", "curve", "change"], "L", "threequarter"]
    ] },
  { short: "SUW", name: "수원 위즈덤", color: "#5b2d8e", dark: "#220f38",
    batters: [
      ["최라온", 0.79, 0.49, 0.86, "R"],
      ["손준서", 0.76, 0.55, 0.80, "R"],
      ["백도현", 0.71, 0.91, 0.51, "R"],
      ["유선우", 0.73, 0.91, 0.48, "R"],
      ["장현준", 0.72, 0.93, 0.47, "L"],
      ["오지훈", 0.72, 0.72, 0.63, "R"],
      ["최서준", 0.68, 0.70, 0.67, "L"],
      ["전연우", 0.68, 0.54, 0.77, "R"],
      ["안시윤", 0.68, 0.57, 0.69, "L"]
    ],
    pitchers: [
      ["선발 주지후", 98, 0.79, ["twoseam", "fork", "curve", "change"], "R", "overhand"],
      ["중간 최태현", 41, 0.76, ["twoseam", "fork", "curve", "change"], "R", "threequarter"],
      ["중간 안하람", 36, 0.77, ["fastball", "change", "curve", "cutter"], "L", "sidearm"],
      ["마무리 박하준", 37, 0.74, ["fastball", "slider", "curve", "change"], "R", "overhand"]
    ] },
  { short: "CHW", name: "창원 다이노스", color: "#1b5e9c", dark: "#0a2440",
    batters: [
      ["김준호", 0.79, 0.53, 0.79, "R"],
      ["정하람", 0.76, 0.51, 0.80, "R"],
      ["안라온", 0.74, 0.88, 0.49, "L"],
      ["허민재", 0.75, 0.91, 0.44, "L"],
      ["남건우", 0.74, 0.92, 0.51, "R"],
      ["정승현", 0.68, 0.69, 0.55, "R"],
      ["이진우", 0.73, 0.68, 0.59, "R"],
      ["전준서", 0.65, 0.58, 0.65, "L"],
      ["차진우", 0.69, 0.52, 0.66, "L"]
    ],
    pitchers: [
      ["선발 강준서", 100, 0.84, ["twoseam", "fork", "curve", "change"], "R", "overhand"],
      ["중간 민서준", 47, 0.74, ["fastball", "twoseam", "fork"], "L", "threequarter"],
      ["중간 홍다온", 46, 0.84, ["twoseam", "fork", "curve", "change"], "L", "submarine"],
      ["마무리 차연우", 39, 0.80, ["twoseam", "fork", "curve", "change"], "L", "threequarter"]
    ] },
  { short: "GOY", name: "고양 히어로즈", color: "#7a1f5c", dark: "#2c0a20",
    batters: [
      ["구현준", 0.79, 0.45, 0.86, "R"],
      ["허도윤", 0.82, 0.46, 0.77, "R"],
      ["하태현", 0.75, 0.83, 0.48, "R"],
      ["백인성", 0.76, 0.88, 0.45, "R"],
      ["조시윤", 0.79, 0.90, 0.48, "R"],
      ["임윤성", 0.75, 0.68, 0.67, "R"],
      ["이도현", 0.75, 0.69, 0.58, "R"],
      ["전동하", 0.69, 0.51, 0.68, "R"],
      ["손지훈", 0.70, 0.55, 0.71, "L"]
    ],
    pitchers: [
      ["선발 김동하", 100, 0.82, ["fastball", "slider", "twoseam"], "R", "overhand"],
      ["중간 남동하", 40, 0.70, ["fastball", "change", "curve", "cutter"], "L", "threequarter"],
      ["중간 성연우", 40, 0.77, ["fastball", "slider", "curve", "change"], "L", "sidearm"],
      ["마무리 남현준", 37, 0.77, ["fastball", "change", "curve", "cutter"], "L", "threequarter"]
    ] },
  { short: "JEJ", name: "제주 오션스", color: "#0f7c8c", dark: "#062f36",
    batters: [
      ["손지후", 0.79, 0.49, 0.91, "R"],
      ["서시윤", 0.77, 0.45, 0.89, "L"],
      ["차다온", 0.71, 0.86, 0.52, "L"],
      ["차건우", 0.76, 0.85, 0.51, "L"],
      ["최연우", 0.72, 0.81, 0.51, "L"],
      ["차준서", 0.71, 0.64, 0.62, "R"],
      ["남윤성", 0.74, 0.61, 0.62, "R"],
      ["강서준", 0.69, 0.46, 0.80, "R"],
      ["정윤성", 0.69, 0.51, 0.77, "L"]
    ],
    pitchers: [
      ["선발 장선우", 101, 0.82, ["fastball", "twoseam", "fork"], "R", "overhand"],
      ["중간 송도경", 50, 0.73, ["fastball", "slider", "twoseam"], "R", "sidearm"],
      ["중간 곽예준", 42, 0.78, ["fastball", "cutter", "slider", "change"], "R", "sidearm"],
      ["마무리 문윤성", 35, 0.81, ["fastball", "slider", "twoseam"], "R", "threequarter"]
    ] }
];
