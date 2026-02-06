const images = {
  dog: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=60",
  cat: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=60",
  rabbit: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=60",

  // ✅ 小鳥（画像変更・GitHub Pages対応）
  bird: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=800&q=60",

  hamster: "https://poppet.fun/wp-content/uploads/2018/12/shutterstock_1018135087-1-1024x768.png"
};

function updateImage() {
  const animal = document.getElementById("animal").value;
  document.getElementById("animalImage").src = images[animal];
}

// 初期画像
updateImage();

function checkPet() {
  const animal = document.getElementById("animal").value;
  const time = Number(document.getElementById("time").value);
  const money = Number(document.getElementById("money").value);
  const away = document.getElementById("away").value;

  let ok = false;
  let needTime = "";
  let needMoney = "";
  let needs = "";
  let level = "";
  let improve = "";

  if (animal === "dog") {
    needTime = "60分/日";
    needMoney = "15,000円/月";
    needs = "毎日の散歩・しつけ・人とのふれあい";
    level = "★★★★★（高）";
    ok = time >= 60 && money >= 15000 && away === "no";
    improve = "散歩時間を確保し、留守時間を減らす";
  }

  if (animal === "cat") {
    needTime = "30分/日";
    needMoney = "10,000円/月";
    needs = "トイレ管理・健康管理";
    level = "★★★☆☆（中）";
    ok = time >= 30 && money >= 10000;
    improve = "世話時間と予算を増やす";
  }

  if (animal === "rabbit") {
    needTime = "30分/日";
    needMoney = "8,000円/月";
    needs = "温度管理・掃除・ストレス対策";
    level = "★★★★☆（やや高）";
    ok = time >= 30 && money >= 8000;
    improve = "飼育環境を整え、世話時間を確保する";
  }

  if (animal === "bird") {
    needTime = "20分/日";
    needMoney = "5,000円/月";
    needs = "清潔なケージ・静かな環境";
    level = "★★☆☆☆（低）";
    ok = time >= 20 && money >= 5000;
    improve = "毎日の世話と環境準備を行う";
  }

  if (animal === "hamster") {
    needTime = "10分/日";
    needMoney = "3,000円/月";
    needs = "夜行性への理解・床材交換";
    level = "★☆☆☆☆（低）";
    ok = time >= 10 && money >= 3000;
    improve = "最低限の時間と費用を確保する";
  }

  document.getElementById("result").innerHTML = `
    <div class="result-card ${ok ? "ok" : "ng"}">
      <strong>${ok ? "✅ 飼育可能" : "❌ 飼育不可能"}</strong><br><br>

      ${ok
        ? "この動物を飼うための条件を満たしています。"
        : "この動物を飼うための条件を満たしていません。"}
      <br><br>

      ⏱ 必要な世話時間：${needTime}<br>
      💰 必要なお金の目安：${needMoney}<br>
      🐾 飼育に必要なこと：${needs}<br>
      ⭐ 飼育難易度：${level}<br><br>

      ${ok ? "" : `🔧 改善点：${improve}`}
    </div>
  `;
}
