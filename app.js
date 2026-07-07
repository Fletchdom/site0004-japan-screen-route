const params = new URLSearchParams(location.search);
const page = document.body.dataset.page;

const rows = [
  ["jp-001", "小偷家族", "Shoplifters", "日本电影", 2018, 8.7, "家庭", "./assets/posters/jp-001.svg"],
  ["jp-002", "驾驶我的车", "Drive My Car", "日本电影", 2021, 8.4, "剧情", "./assets/posters/jp-002.svg"],
  ["jp-003", "花束般的恋爱", "We Made a Beautiful Bouquet", "日本电影", 2021, 8.5, "爱情", "./assets/posters/jp-003.svg"],
  ["jp-004", "告白", "Confessions", "日本电影", 2010, 8.5, "悬疑", "./assets/posters/jp-004.svg"],
  ["jp-005", "无人知晓", "Nobody Knows", "日本电影", 2004, 8.8, "剧情", "./assets/posters/jp-005.svg"],
  ["jp-006", "入殓师", "Departures", "日本电影", 2008, 8.9, "人生", "./assets/posters/jp-006.svg"],
  ["jp-007", "如父如子", "Like Father, Like Son", "日本电影", 2013, 8.6, "家庭", "./assets/posters/jp-007.svg"],
  ["jp-008", "情书", "Love Letter", "日本电影", 1995, 8.8, "爱情", "./assets/posters/jp-008.svg"],
  ["jp-009", "东京奏鸣曲", "Tokyo Sonata", "日本电影", 2008, 8.1, "家庭", "./assets/posters/jp-009.svg"],
  ["jp-010", "菊次郎的夏天", "Kikujiro", "日本电影", 1999, 8.8, "公路", "./assets/posters/jp-010.svg"],
  ["jp-011", "怪物", "Monster", "日本电影", 2023, 8.6, "悬疑", "./assets/posters/jp-011.svg"],
  ["jp-012", "百元之恋", "100 Yen Love", "日本电影", 2014, 8.3, "励志", "./assets/posters/jp-012.svg"],
  ["jp-013", "非自然死亡", "Unnatural", "日剧", 2018, 9.3, "悬疑", "./assets/posters/jp-013.jpg"],
  ["jp-014", "孤独的美食家", "Solitary Gourmet", "日剧", 2012, 8.9, "美食", "./assets/posters/jp-014.jpg"],
  ["jp-015", "深夜食堂", "Midnight Diner", "日剧", 2009, 8.9, "生活", "./assets/posters/jp-015.jpg"],
  ["jp-016", "半泽直树", "Hanzawa Naoki", "日剧", 2013, 9.2, "职场", "./assets/posters/jp-016.jpg"],
  ["jp-017", "弥留之国的爱丽丝", "Alice in Borderland", "日剧", 2020, 8.2, "悬疑", "./assets/posters/jp-017.jpg"],
  ["jp-018", "忍者之家", "House of Ninjas", "日剧", 2024, 7.8, "动作", "./assets/posters/jp-018.jpg"],
  ["jp-019", "First Love 初恋", "First Love", "日剧", 2022, 8.5, "爱情", "./assets/posters/jp-019.jpg"],
  ["jp-020", "舞伎家的料理人", "The Makanai", "日剧", 2023, 8.1, "美食", "./assets/posters/jp-020.jpg"],
  ["jp-021", "关注者", "Followers", "日剧", 2020, 7.9, "都市", "./assets/posters/jp-021.jpg"],
  ["jp-022", "义理/耻", "Giri/Haji", "日剧", 2019, 8.0, "犯罪", "./assets/posters/jp-022.jpg"],
  ["jp-023", "东京罪恶", "Tokyo Vice", "日剧", 2022, 8.0, "犯罪", "./assets/posters/jp-023.jpg"],
  ["jp-024", "神之水滴", "Drops of God", "日剧", 2023, 8.1, "剧情", "./assets/posters/jp-024.jpg"],
  ["jp-025", "火烧御手洗家", "Burn the House Down", "日剧", 2023, 7.8, "悬疑", "./assets/posters/jp-025.jpg"],
  ["jp-026", "宽松世代又如何", "Saving My Stupid Youth", "日剧", 2014, 8.4, "青春", "./assets/posters/jp-026.jpg"],
  ["jp-027", "四重奏", "Quartet", "日剧", 2017, 8.9, "都市", "./assets/posters/jp-027.jpg"],
  ["jp-028", "凪的新生活", "Nagi no Oitoma", "日剧", 2019, 8.8, "生活", "./assets/posters/jp-028.jpg"],
  ["jp-029", "重启人生", "Brush Up Life", "日剧", 2023, 9.0, "奇幻", "./assets/posters/jp-029.jpg"],
  ["jp-030", "轮到你了", "Your Turn to Kill", "日剧", 2019, 7.8, "悬疑", "./assets/posters/jp-030.jpg"],
  ["jp-031", "昨日的美食", "What Did You Eat Yesterday?", "日剧", 2019, 8.8, "美食", "./assets/posters/jp-031.jpg"],
  ["jp-032", "早安恋味蛋糕店", "Good Morning Call", "日剧", 2016, 7.6, "爱情", "./assets/posters/jp-032.jpg"],
  ["jp-033", "千与千寻", "Spirited Away", "动漫电影", 2001, 9.3, "奇幻", "./assets/posters/jp-033.jpg"],
  ["jp-034", "你的名字", "Your Name.", "动漫电影", 2016, 8.8, "爱情", "./assets/posters/jp-034.jpg"],
  ["jp-035", "铃芽之旅", "Suzume", "动漫电影", 2022, 8.3, "奇幻", "./assets/posters/jp-035.jpg"],
  ["jp-036", "天气之子", "Weathering with You", "动漫电影", 2019, 8.1, "青春", "./assets/posters/jp-036.jpg"],
  ["jp-037", "声之形", "A Silent Voice", "动漫电影", 2016, 8.7, "青春", "./assets/posters/jp-037.jpg"],
  ["jp-038", "蓝色巨星", "Blue Giant", "动漫电影", 2023, 8.5, "音乐", "./assets/posters/jp-038.jpg"],
  ["jp-039", "萤火虫之墓", "Grave of the Fireflies", "动漫电影", 1988, 8.7, "战争", "./assets/posters/jp-039.jpg"],
  ["jp-040", "侧耳倾听", "Whisper of the Heart", "动漫电影", 1995, 8.9, "青春", "./assets/posters/jp-040.jpg"],
  ["jp-041", "夏日大作战", "Summer Wars", "动漫电影", 2009, 8.5, "科幻", "./assets/posters/jp-041.jpg"],
  ["jp-042", "言叶之庭", "The Garden of Words", "动漫电影", 2013, 8.3, "爱情", "./assets/posters/jp-042.jpg"],
  ["jp-043", "普罗米亚", "Promare", "动漫电影", 2019, 8.1, "动作", "./assets/posters/jp-043.jpg"],
  ["jp-044", "给桃子的信", "A Letter to Momo", "动漫电影", 2011, 8.2, "奇幻", "./assets/posters/jp-044.jpg"],
  ["jp-045", "The Boyfriend", "The Boyfriend", "综艺", 2024, 8.1, "真人秀", "./assets/posters/jp-045.svg"],
  ["jp-046", "双层公寓 都会男女", "Terrace House: Boys & Girls in the City", "综艺", 2015, 8.1, "真人秀", "./assets/posters/jp-046.svg"],
  ["jp-047", "Music Station", "Music Station", "综艺", 1986, 8.2, "音乐", "./assets/posters/jp-047.jpg"],
  ["jp-048", "寿司之神", "Jiro Dreams of Sushi", "纪录片", 2011, 8.7, "美食", "./assets/posters/jp-048.svg"],
  ["jp-049", "梦与狂想的王国", "The Kingdom of Dreams and Madness", "纪录片", 2013, 8.6, "电影", "./assets/posters/jp-049.svg"],
  ["jp-050", "不了神话 宫崎骏", "Never-Ending Man: Hayao Miyazaki", "纪录片", 2016, 8.4, "人物", "./assets/posters/jp-050.svg"],
  ["jp-051", "东京奥林匹克", "Tokyo Olympiad", "纪录片", 1965, 8.2, "体育", "./assets/posters/jp-051.svg"],
  ["jp-052", "坂本龙一：终曲", "Ryuichi Sakamoto: Coda", "纪录片", 2017, 8.5, "音乐", "./assets/posters/jp-052.svg"],
  ["jp-053", "链锯人 剧场版：蕾塞篇", "Chainsaw Man: Reze Arc", "动漫电影", 2025, 9.1, "动作", "./assets/posters/jp-053.jpg"],
  ["jp-054", "银魂 THE FINAL", "Gintama: The Very Final", "动漫电影", 2021, 9.1, "动作", "./assets/posters/jp-054.jpg"],
  ["jp-055", "银魂完结篇：永远的万事屋", "Gintama: Be Forever Yorozuya", "动漫电影", 2013, 8.9, "动作", "./assets/posters/jp-055.jpg"],
  ["jp-056", "进击的巨人：最后的进击", "Attack on Titan: The Last Attack", "动漫电影", 2024, 8.8, "动作", "./assets/posters/jp-056.jpg"],
  ["jp-057", "紫罗兰永恒花园 剧场版", "Violet Evergarden: The Movie", "动漫电影", 2020, 8.8, "剧情", "./assets/posters/jp-057.jpg"],
  ["jp-058", "伤物语 III 冷血篇", "Kizumonogatari Part 3", "动漫电影", 2017, 8.8, "动作", "./assets/posters/jp-058.jpg"],
  ["jp-059", "辉夜大小姐：初吻不会结束", "Kaguya-sama: The First Kiss", "动漫电影", 2022, 8.7, "喜剧", "./assets/posters/jp-059.jpg"],
  ["jp-060", "哈尔的移动城堡", "Howl's Moving Castle", "动漫电影", 2004, 8.7, "奇幻", "./assets/posters/jp-060.jpg"],
  ["jp-061", "幽灵公主", "Princess Mononoke", "动漫电影", 1997, 8.7, "冒险", "./assets/posters/jp-061.jpg"],
  ["jp-062", "鬼灭之刃 无限城篇 第一章", "Demon Slayer: Infinity Castle", "动漫电影", 2025, 8.7, "动作", "./assets/posters/jp-062.jpg"],
  ["jp-063", "赛马娘 新时代之门", "Umamusume: Beginning of a New Era", "动漫电影", 2024, 8.6, "运动", "./assets/posters/jp-063.jpg"],
  ["jp-064", "Fate/stay night 天之杯III", "Heaven's Feel III. Spring Song", "动漫电影", 2020, 8.6, "动作", "./assets/posters/jp-064.jpg"],
  ["jp-065", "排球少年 垃圾场决战", "Haikyu!! The Dumpster Battle", "动漫电影", 2024, 8.6, "运动", "./assets/posters/jp-065.jpg"],
  ["jp-066", "天元突破红莲螺岩 螺岩篇", "Gurren Lagann: The Lights in the Sky are Stars", "动漫电影", 2009, 8.6, "科幻", "./assets/posters/jp-066.jpg"],
  ["jp-067", "来自深渊 深魂的黎明", "Made in Abyss: Dawn of the Deep Soul", "动漫电影", 2020, 8.6, "冒险", "./assets/posters/jp-067.jpg"],
  ["jp-068", "青春猪头少年不会梦到怀梦美少女", "Rascal Does Not Dream of a Dreaming Girl", "动漫电影", 2019, 8.6, "剧情", "./assets/posters/jp-068.jpg"],
  ["jp-069", "凉宫春日的消失", "The Disappearance of Haruhi Suzumiya", "动漫电影", 2010, 8.6, "青春", "./assets/posters/jp-069.jpg"],
  ["jp-070", "新世纪福音战士新剧场版：终", "Evangelion: 3.0+1.0", "动漫电影", 2021, 8.6, "科幻", "./assets/posters/jp-070.jpg"],
  ["jp-071", "虫师 铃之滴", "Mushi-Shi: Drops of Bells", "动漫电影", 2015, 8.6, "奇幻", "./assets/posters/jp-071.jpg"],
  ["jp-072", "新世纪福音战士剧场版：Air/真心为你", "The End of Evangelion", "动漫电影", 1997, 8.6, "科幻", "./assets/posters/jp-072.jpg"],
  ["jp-073", "伤物语 II 热血篇", "Kizumonogatari Part 2", "动漫电影", 2016, 8.6, "动作", "./assets/posters/jp-073.jpg"],
  ["jp-074", "狼的孩子雨和雪", "Wolf Children", "动漫电影", 2012, 8.6, "家庭", "./assets/posters/jp-074.jpg"],
  ["jp-075", "未麻的部屋", "Perfect Blue", "动漫电影", 1998, 8.6, "悬疑", "./assets/posters/jp-075.jpg"],
  ["jp-076", "我想吃掉你的胰脏", "I Want To Eat Your Pancreas", "动漫电影", 2018, 8.6, "剧情", "./assets/posters/jp-076.jpg"],
  ["jp-077", "鬼灭之刃 无限列车篇", "Demon Slayer: Mugen Train", "动漫电影", 2020, 8.5, "动作", "./assets/posters/jp-077.jpg"],
  ["jp-078", "银魂 新译红樱篇", "Gintama: The Movie", "动漫电影", 2010, 8.5, "动作", "./assets/posters/jp-078.jpg"],
  ["jp-079", "少女歌剧 剧场版", "Revue Starlight: The Movie", "动漫电影", 2021, 8.5, "音乐", "./assets/posters/jp-079.jpg"],
  ["jp-080", "魔法少女小圆 剧场版 叛逆的物语", "Puella Magi Madoka Magica: Rebellion", "动漫电影", 2013, 8.5, "奇幻", "./assets/posters/jp-080.jpg"],
  ["jp-081", "空之境界 第五章 矛盾螺旋", "The Garden of Sinners: Paradox Spiral", "动漫电影", 2008, 8.5, "动作", "./assets/posters/jp-081.jpg"],
  ["jp-082", "Fate/stay night 天之杯II", "Heaven's Feel II. Lost Butterfly", "动漫电影", 2019, 8.5, "动作", "./assets/posters/jp-082.jpg"],
  ["jp-083", "命运石之门 负荷领域的既视感", "Steins;Gate: The Movie", "动漫电影", 2013, 8.4, "科幻", "./assets/posters/jp-083.jpg"],
  ["jp-084", "紫罗兰永恒花园 外传", "Violet Evergarden: Eternity and the Auto Memory Doll", "动漫电影", 2019, 8.4, "剧情", "./assets/posters/jp-084.jpg"],
  ["jp-085", "夏目友人帐 缘结空蝉", "Natsume's Book of Friends Movie", "动漫电影", 2018, 8.4, "生活", "./assets/posters/jp-085.jpg"]
];

const items = rows.map((row, index) => {
  const [id, title, originalTitle, kind, year, score, genre, poster] = row;
  return {
    id,
    title,
    originalTitle,
    kind,
    year,
    score: Number(score).toFixed(1),
    genre,
    poster,
    hot: 18000 - index * 73 + Math.round(Number(score) * 120) + (poster.endsWith(".svg") ? -10000 : 25000),
    summary: `${title}是日本电影网${kind}频道的${genre}内容，提供片名、原名、年份、评分、剧情看点与相关推荐。你可以在日本电影在线片库中按类型、热度和年份继续浏览，快速发现更多日本与本国电影在线观看资源。`
  };
});

function imageMarkup(item) {
  return `<img src="${item.poster}" alt="${item.title}" loading="lazy">`;
}

function card(item) {
  return `<article class="catalog-card">
    <a href="./movie.html?id=${encodeURIComponent(item.id)}" aria-label="查看${item.title}详情">
      <div class="thumb">${imageMarkup(item)}</div>
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
    ${imageMarkup(item)}
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
  document.getElementById("leadFeature").innerHTML = `<a href="./movie.html?id=${first.id}">${imageMarkup(first)}<span><b>${first.title}</b><em>${first.kind} / ${first.score}</em></span></a>`;
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
  return { list, kind, genre };
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
    <figure>${imageMarkup(item)}</figure>
    <article>
      <p class="label">${item.kind} / ${item.genre}</p>
      <h1>${item.title}</h1>
      <p class="sub">${item.originalTitle}</p>
      <div class="facts"><span>评分 ${item.score}</span><span>${item.year}</span><span>${item.kind}</span><span>${item.genre}</span></div>
      <p>${item.summary}</p>
      <a class="text-link" href="./library.html?kind=${encodeURIComponent(item.kind)}">查看日本电影在线同频道内容</a>
    </article>`;
  const related = items
    .filter((entry) => entry.id !== item.id && (entry.kind === item.kind || entry.genre === item.genre))
    .slice(0, 8);
  document.getElementById("relatedGrid").innerHTML = related.map(card).join("");
}

if (page === "home") renderHome();
if (page === "library") renderLibrary();
if (page === "detail") renderDetail();
