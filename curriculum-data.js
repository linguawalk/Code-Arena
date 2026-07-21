// curriculum-data.js
// Code Arena 전체 커리큘럼 구조. index.html, browse.html, player.html이 공유해서 사용합니다.
// 새 언어/레벨/유닛을 추가할 때는 이 파일만 수정하면 됩니다.

const CURRICULUM = {

  foundation: {
    title: "Foundation",
    subtitle: "프로그래밍 언어 이전에, 컴퓨터처럼 생각하기",
    accent: "var(--c-found)",
    stages: [
      {
        key: "stage0_computer_thinking",
        path: "foundation/stage0_computer_thinking",
        title: "Stage 0 · 컴퓨터적 사고",
        units: 6
      },
      {
        key: "stage1_c_onboarding",
        path: "foundation/stage1_c_onboarding",
        title: "Stage 1 · C 온보딩",
        units: 8
      }
    ]
  },

  tracks: [
    {
      key: "track_a",
      title: "트랙 A · 시스템 / 저수준",
      subtitle: "메모리를 직접 다루는 언어들",
      accent: "var(--c-system)",
      category: "system_low_level",
      languages: [
        { key: "c",    name: "C",     path: "content/system_low_level/c",    levels: 6 },
        { key: "cpp",  name: "C++",   path: "content/system_low_level/cpp",  levels: 4 },
        { key: "rust", name: "Rust",  path: "content/system_low_level/rust", levels: 4 }
      ]
    },
    {
      key: "track_b",
      title: "트랙 B · 객체지향 / 엔터프라이즈",
      subtitle: "기업용 애플리케이션 언어들",
      accent: "var(--c-oop)",
      category: "oop_enterprise",
      languages: [
        { key: "visual_basic", name: "Visual Basic", path: "content/oop_enterprise/visual_basic", levels: 6 },
        { key: "csharp",       name: "C#",            path: "content/oop_enterprise/csharp",       levels: 6 },
        { key: "java",         name: "Java",           path: "content/oop_enterprise/java",         levels: 6 }
      ]
    },
    {
      key: "track_c",
      title: "트랙 C · 스크립트 / 실무",
      subtitle: "웹과 자동화의 언어들",
      accent: "var(--c-script)",
      category: "scripting",
      languages: [
        { key: "python",     name: "Python",     path: "content/scripting/python",     levels: 6 },
        { key: "javascript", name: "JavaScript", path: "content/scripting/javascript", levels: 6 },
        { key: "php",        name: "PHP",        path: "content/scripting/php",        levels: 4 }
      ]
    },
    {
      key: "track_d",
      title: "트랙 D · 레거시 / 역사",
      subtitle: "지금의 언어들이 태어난 뿌리",
      accent: "var(--c-legacy)",
      category: "legacy_historical",
      languages: [
        { key: "basic_early", name: "BASIC",   path: "content/legacy_historical/basic_early", levels: 3 },
        { key: "pascal",      name: "Pascal",  path: "content/legacy_historical/pascal",       levels: 3 },
        { key: "fortran",     name: "FORTRAN", path: "content/legacy_historical/fortran",       levels: 3 },
        { key: "cobol",       name: "COBOL",   path: "content/legacy_historical/cobol",         levels: 3 }
      ]
    }
  ],

  modules: [
    {
      key: "dsa",
      title: "자료구조 & 알고리즘",
      subtitle: "언어에 상관없이 알아야 할 것 (Python으로 구현)",
      accent: "var(--c-module)",
      path: "modules/data_structures_algorithms",
      levels: 4
    }
  ],

  // 유닛 파일 이름 규칙: 항상 4유닛/레벨, level{N}_unit{NN}.json
  UNITS_PER_LEVEL: 4,

  // 파일 경로 헬퍼
  unitFile(basePath, level, unit) {
    const uu = String(unit).padStart(2, "0");
    return `${basePath}/level${level}_unit${uu}.json`;
  },
  stageFile(basePath, unit) {
    const uu = String(unit).padStart(2, "0");
    return `${basePath}/unit${uu}.json`;
  }
};

if (typeof module !== "undefined") { module.exports = CURRICULUM; }
