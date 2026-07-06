const params = new URLSearchParams(location.search);
const page = document.body.dataset.page;

const photoIds = [
  "1493976040374-85c8e12f0c0e",
  "1526481280693-3bfa7568e0f3",
  "1528360983277-13d401cdc186",
  "1542051841857-5f90071e7989",
  "1513407030348-c983a97b98d8",
  "1500530855697-b586d89ba3ee",
  "1536098561742-ca998e48cbcc",
  "1503899036084-c55cdd92da26",
  "1553621042-f6e147245754",
  "1557409518-691ebcd96038",
  "1545569341-9eb8b30979d9",
  "1505069190533-da1c9af13346",
  "1518544801976-3e159e50e5bb",
  "1528164344705-47542687000d",
  "1568084680786-a84f91d1153c",
  "1542640244-7e672d6cef4e",
  "1512580770426-cbed71c40e94",
  "1490806843957-31f4c9a91c65",
  "1536098561742-ca998e48cbcc",
  "1542051841857-5f90071e7989"
];

const groups = [
  {
    kind: "日本电影",
    rows: [
      ["海边的朝食券", "Seaside Breakfast Ticket", 2024, 8.3, "生活"],
      ["怪物", "Monster", 2023, 8.6, "悬疑"],
      ["花束般的恋爱", "We Made a Beautiful Bouquet", 2021, 8.5, "爱情"],
      ["小偷家族", "Shoplifters", 2018, 8.7, "家庭"],
      ["驾驶我的车", "Drive My Car", 2021, 8.4, "剧情"],
      ["入殓师", "Departures", 2008, 8.9, "人生"],
      ["情书", "Love Letter", 1995, 8.8, "爱情"],
      ["告白", "Confessions", 2010, 8.5, "悬疑"],
      ["如父如子", "Like Father, Like Son", 2013, 8.6, "家庭"],
      ["第三度嫌疑人", "The Third Murder", 2017, 7.9, "推理"],
      ["百元之恋", "100 Yen Love", 2014, 8.3, "励志"],
      ["横道世之介", "A Story of Yonosuke", 2013, 8.8, "青春"],
      ["编舟记", "The Great Passage", 2013, 8.6, "职场"],
      ["菊次郎的夏天", "Kikujiro", 1999, 8.8, "公路"],
      ["嫌疑人X的献身", "Suspect X", 2008, 8.4, "推理"],
      ["浅田家", "The Asadas", 2020, 8.2, "家庭"],
      ["垫底辣妹", "Flying Colors", 2015, 8.2, "青春"],
      ["东京奏鸣曲", "Tokyo Sonata", 2008, 8.1, "家庭"],
      ["南极料理人", "The Chef of South Polar", 2009, 8.3, "美食"],
      ["夜空总有最大密度的蓝色", "Tokyo Night Sky", 2017, 7.8, "都市"]
    ]
  },
  {
    kind: "日剧",
    rows: [
      ["非自然死亡", "Unnatural", 2018, 9.3, "悬疑"],
      ["孤独的美食家", "Solitary Gourmet", 2012, 8.9, "美食"],
      ["深夜食堂", "Midnight Diner", 2009, 8.9, "生活"],
      ["重版出来", "Sleepeeer Hit!", 2016, 8.9, "职场"],
      ["逃避虽可耻但有用", "The Full-Time Wife Escapist", 2016, 8.4, "爱情"],
      ["凪的新生活", "Nagi's Long Vacation", 2019, 8.8, "生活"],
      ["First Love 初恋", "First Love", 2022, 8.5, "爱情"],
      ["最爱", "Dearest", 2021, 8.1, "悬疑"],
      ["大豆田永久子与三名前夫", "Omameda Towako", 2021, 8.7, "都市"],
      ["半泽直树", "Hanzawa Naoki", 2013, 9.2, "职场"],
      ["轮到你了", "Your Turn to Kill", 2019, 7.8, "悬疑"],
      ["MIU404", "MIU404", 2020, 8.7, "刑侦"],
      ["重启人生", "Brush Up Life", 2023, 9.0, "奇幻"],
      ["这个不可以报销", "This Is Not a Business Expense", 2019, 8.5, "职场"],
      ["石子和羽男", "Ishiko and Haneo", 2022, 8.0, "律政"],
      ["昨日的美食", "What Did You Eat Yesterday?", 2019, 8.8, "美食"],
      ["虎与龙", "Tiger & Dragon", 2005, 9.2, "喜剧"],
      ["海女", "Amachan", 2013, 9.0, "青春"],
      ["0.5的男人", "0.5 Man", 2023, 8.2, "家庭"],
      ["镰仓殿的13人", "The 13 Lords of the Shogun", 2022, 8.8, "历史"]
    ]
  },
  {
    kind: "动漫电影",
    rows: [
      ["千与千寻", "Spirited Away", 2001, 9.3, "奇幻"],
      ["你的名字", "Your Name.", 2016, 8.8, "爱情"],
      ["铃芽之旅", "Suzume", 2022, 8.3, "奇幻"],
      ["天气之子", "Weathering with You", 2019, 8.1, "青春"],
      ["声之形", "A Silent Voice", 2016, 8.7, "青春"],
      ["灌篮高手 THE FIRST SLAM DUNK", "The First Slam Dunk", 2022, 9.0, "运动"],
      ["蓝色巨星", "Blue Giant", 2023, 8.5, "音乐"],
      ["萤火虫之墓", "Grave of the Fireflies", 1988, 8.7, "战争"],
      ["红猪", "Porco Rosso", 1992, 8.6, "冒险"],
      ["侧耳倾听", "Whisper of the Heart", 1995, 8.9, "青春"],
      ["穿越时空的少女", "The Girl Who Leapt Through Time", 2006, 8.6, "青春"],
      ["夏日大作战", "Summer Wars", 2009, 8.5, "科幻"],
      ["狼的孩子雨和雪", "Wolf Children", 2012, 8.8, "家庭"],
      ["言叶之庭", "The Garden of Words", 2013, 8.3, "爱情"],
      ["企鹅公路", "Penguin Highway", 2018, 8.0, "奇幻"],
      ["普罗米亚", "Promare", 2019, 8.1, "动作"],
      ["给桃子的信", "A Letter to Momo", 2011, 8.2, "奇幻"],
      ["电影摇曳露营", "Laid-Back Camp Movie", 2022, 8.4, "生活"],
      ["名侦探柯南 黑铁的鱼影", "Black Iron Submarine", 2023, 7.7, "推理"],
      ["你想活出怎样的人生", "The Boy and the Heron", 2023, 8.2, "奇幻"]
    ]
  },
  {
    kind: "综艺",
    rows: [
      ["月曜夜未央", "Monday Late Show", 2012, 8.9, "访谈"],
      ["水曜日的Downtown", "Wednesday Downtown", 2014, 9.1, "喜剧"],
      ["可以跟着去你家吗", "Can I Follow You Home?", 2014, 8.8, "纪实"],
      ["相席食堂", "Aiseki Shokudo", 2018, 8.7, "旅行"],
      ["有吉之壁", "Ariyoshi no Kabe", 2015, 8.4, "喜剧"],
      ["人类观察Monitoring", "Monitoring", 2012, 8.3, "真人秀"],
      ["松子不知道的世界", "The World Unknown to Matsuko", 2011, 8.7, "生活"],
      ["笑点", "Shoten", 1966, 8.8, "喜剧"],
      ["Another Sky", "Another Sky", 2008, 8.2, "旅行"],
      ["A-Studio+", "A-Studio+", 2009, 8.1, "访谈"],
      ["全力脱力新闻", "Datsuryoku News Network", 2015, 8.5, "喜剧"],
      ["LIFE人生喜剧", "Life Comedy", 2012, 8.6, "短剧"],
      ["突然占卜可以吗", "Sudden Fortune Telling", 2020, 7.8, "访谈"],
      ["日本秘境有房好吃惊", "Remote House Surprise", 2018, 8.0, "旅行"],
      ["双层公寓 城市篇", "Terrace House City", 2015, 8.1, "真人秀"],
      ["料理东西军", "Dotch Cooking Show", 1997, 8.3, "美食"],
      ["KING & PRINCEる。", "King & Prince Ru", 2022, 7.9, "真人秀"],
      ["千鸟的クセ剧场", "Chidori Stage", 2021, 8.0, "喜剧"],
      ["美食冤大头旅行", "Gourmet Tab", 2023, 7.8, "美食"],
      ["东京夜谈圆桌", "Tokyo Night Roundtable", 2024, 7.9, "访谈"]
    ]
  },
  {
    kind: "纪录片",
    rows: [
      ["寿司之神", "Jiro Dreams of Sushi", 2011, 8.7, "美食"],
      ["人生果实", "Life Is Fruity", 2017, 9.1, "生活"],
      ["纪实72小时", "Document 72 Hours", 2006, 9.0, "社会"],
      ["岩合光昭的猫步走世界", "Iwagou's World Cats", 2012, 8.8, "旅行"],
      ["京都人的秘密欢愉", "The Secret Lives of Kyoto Folk", 2015, 8.9, "城市"],
      ["和食双神", "The God of Ramen and Sushi", 2013, 8.6, "美食"],
      ["日本铁路慢行", "Japan Railway Slow Trip", 2021, 8.2, "旅行"],
      ["东京地下水路", "Tokyo Underground Canal", 2020, 8.0, "城市"],
      ["濑户内艺术群岛", "Setouchi Art Islands", 2019, 8.4, "艺术"],
      ["北海道雪原纪事", "Hokkaido Snow Field Notes", 2022, 8.3, "自然"],
      ["冲绳海风档案", "Okinawa Sea Breeze Archive", 2021, 8.1, "自然"],
      ["日本工艺百年", "A Century of Japanese Craft", 2018, 8.5, "工艺"],
      ["富士山生态笔记", "Fuji Ecology Notes", 2023, 8.0, "自然"],
      ["里山物语", "Satoyama Story", 2004, 8.7, "自然"],
      ["四季列岛", "Four Seasons of Japan", 2020, 8.2, "旅行"],
      ["奈良美智旅程", "Yoshitomo Nara Journey", 2007, 8.1, "艺术"],
      ["东京重建日志", "Tokyo Rebuild Journal", 2024, 7.9, "城市"],
      ["大河之源", "Source of the River", 2016, 8.0, "自然"],
      ["世界遗产日本篇", "World Heritage Japan", 2015, 8.4, "历史"],
      ["编织生活", "Weaving Life", 2018, 8.3, "工艺"]
    ]
  }
];

const items = groups.flatMap((group, groupIndex) =>
  group.rows.map((row, rowIndex) => {
    const [title, originalTitle, year, score, genre] = row;
    const index = groupIndex * 20 + rowIndex;
    return {
      id: `route-${String(index + 1).padStart(3, "0")}`,
      title,
      originalTitle,
      kind: group.kind,
      year,
      score: Number(score).toFixed(1),
      genre,
      poster: posterFor(index),
      hot: 18000 - index * 71 + Math.round(Number(score) * 120),
      summary: `${title}收录于东瀛映像航线，归入${group.kind}频道和${genre}题材。页面整理片名、原名、年份、评分、视觉海报、剧情气质与相关推荐，适合用于日本电影推荐、日剧检索、动漫电影片单、综艺节目索引和纪录片资料查询。`
    };
  })
);

function posterFor(index) {
  const id = photoIds[index % photoIds.length];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=760&q=82`;
}

function card(item) {
  return `<article class="catalog-card">
    <a href="./movie.html?id=${encodeURIComponent(item.id)}" aria-label="查看${item.title}详情">
      <div class="thumb"><img src="${item.poster}" alt="${item.title}" loading="lazy"></div>
      <div class="catalog-body">
        <span>${item.kind}</span>
        <h3>${item.title}</h3>
        <p>${item.originalTitle}</p>
        <div><b>${item.score}</b><em>${item.year}</em><em>${item.genre}</em></div>
      </div>
    </a>
  </article>`;
}

function row(item) {
  return `<a class="feature-row" href="./movie.html?id=${encodeURIComponent(item.id)}">
    <img src="${item.poster}" alt="${item.title}" loading="lazy">
    <span><b>${item.title}</b><small>${item.kind} / ${item.genre} / ${item.year}</small></span>
    <em>${item.score}</em>
  </a>`;
}

function byHot() {
  return [...items].sort((a, b) => b.hot - a.hot);
}

function renderHome() {
  const hot = byHot();
  const first = hot[0];
  document.getElementById("leadFeature").innerHTML = `<a href="./movie.html?id=${first.id}"><img src="${first.poster}" alt="${first.title}"><span><b>${first.title}</b><em>${first.kind} / ${first.score}</em></span></a>`;
  document.getElementById("editorList").innerHTML = hot.slice(1, 8).map(row).join("");
  document.getElementById("scoreList").innerHTML = [...items]
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map((item) => `<li><a href="./movie.html?id=${item.id}"><span>${item.title}</span><b>${item.score}</b></a></li>`)
    .join("");
  document.getElementById("homeGrid").innerHTML = hot.slice(0, 36).map(card).join("");
}

function currentList() {
  const kind = params.get("kind") || "全部";
  const genre = params.get("genre") || "";
  const sort = params.get("sort") || document.getElementById("sortSelect")?.value || "hot";
  let list = [...items];
  if (kind !== "全部") list = list.filter((item) => item.kind === kind);
  if (genre) list = list.filter((item) => item.genre === genre);
  list.sort((a, b) => sort === "score" ? b.score - a.score : sort === "year" ? b.year - a.year : b.hot - a.hot);
  return { list, kind, genre, sort };
}

function renderLibrary() {
  const genres = [...new Set(items.map((item) => item.genre))].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
  const genreSelect = document.getElementById("genreSelect");
  genreSelect.innerHTML += genres.map((genre) => `<option value="${genre}">${genre}</option>`).join("");
  genreSelect.value = params.get("genre") || "";
  genreSelect.onchange = () => {
    if (genreSelect.value) params.set("genre", genreSelect.value);
    else params.delete("genre");
    location.href = `./library.html?${params.toString()}`;
  };

  document.querySelectorAll("[data-kind]").forEach((button) => {
    const isActive = (params.get("kind") || "全部") === button.dataset.kind;
    button.classList.toggle("active", isActive);
    button.onclick = () => {
      const next = new URLSearchParams(location.search);
      if (button.dataset.kind === "全部") next.delete("kind");
      else next.set("kind", button.dataset.kind);
      location.href = next.toString() ? `./library.html?${next.toString()}` : "./library.html";
    };
  });

  const select = document.getElementById("sortSelect");
  select.value = params.get("sort") || "hot";
  select.onchange = () => {
    params.set("sort", select.value);
    location.href = `./library.html?${params.toString()}`;
  };

  const { list, kind, genre } = currentList();
  const suffix = genre ? ` / ${genre}` : "";
  document.getElementById("libraryTitle").textContent = kind === "全部" ? `全部内容${suffix}` : `${kind}${suffix}`;
  document.getElementById("resultCount").textContent = `${list.length} 条`;
  document.getElementById("libraryGrid").innerHTML = list.map(card).join("");
}

function renderDetail() {
  const item = items.find((entry) => entry.id === params.get("id")) || items[0];
  document.title = "日本电影在线观看-海量资源库日系精品聚合-日本电影精彩视频高清在线观看平台";
  document.querySelector("meta[name='description']").setAttribute("content", "日本电影在线观看是2026年全新升级的在线影院，聚合日本全分区海量影视资源，涵盖日剧、电影、动漫、综艺、纪录片等。支持多端同步访问，海量高清精彩视频每日更新，无需下载即可观看，全部免费开放。");
  document.getElementById("detailRoot").innerHTML = `
    <figure><img src="${item.poster}" alt="${item.title}"></figure>
    <article>
      <p class="label">${item.kind} / ${item.genre}</p>
      <h1>${item.title}</h1>
      <p class="sub">${item.originalTitle}</p>
      <div class="facts"><span>评分 ${item.score}</span><span>${item.year}</span><span>${item.kind}</span><span>${item.genre}</span></div>
      <p>${item.summary}</p>
      <a class="text-link" href="./library.html?kind=${encodeURIComponent(item.kind)}">查看同频道内容</a>
    </article>`;
  const related = items
    .filter((entry) => entry.id !== item.id && (entry.kind === item.kind || entry.genre === item.genre))
    .slice(0, 8);
  document.getElementById("relatedGrid").innerHTML = related.map(card).join("");
}

if (page === "home") renderHome();
if (page === "library") renderLibrary();
if (page === "detail") renderDetail();
