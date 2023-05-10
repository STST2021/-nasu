const rulesModal = document.getElementById('rules-modal');
rulesModal.innerHTML = '<div class="rule-content"><h2>遊び方・操作方法</h2><p>【バーの移動】十字キーor画面タップ<br>君はブロックを全破壊できるかな？</p></div><button id="close-modal-btn">閉じる</button>';
const showRulesBtn = document.getElementById('show-rules-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
showRulesBtn.addEventListener('click', () => {
  rulesModal.style.display = 'block';
});
closeModalBtn.addEventListener('click', () => {
  rulesModal.style.display = 'none';
});
const rulesModal2 = document.getElementById('rules-modal2');
rulesModal2.innerHTML = '<div class="rule-content"><h2>遊び方</h2><p>とても簡単!<br>注文リストにあるドリンクの合ったボタンを押せばいいだけ‼<BR>世界記録付き</p></div><button id="close-modal-btn2">閉じる</button>';
const showRulesBtn2 = document.getElementById('show-rules-btn2');
const closeModalBtn2 = document.getElementById('close-modal-btn2');
showRulesBtn2.addEventListener('click', () => {
  rulesModal2.style.display = 'block';
});
closeModalBtn2.addEventListener('click', () => {
  rulesModal2.style.display = 'none';
});
