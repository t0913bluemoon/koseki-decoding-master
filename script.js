/* ==========================================================
   戸籍解読マスター：表示ロジック
   （データ本体は data.js の docData を参照）
========================================================== */

/* 戸籍切り替え */
function switchDoc(key) {
    const data = docData[key];
    if (!data) {
        return;
    }
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
    });
    const activeTab = document.getElementById('tab-' + key);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    document.getElementById('doc-badge-label').innerText = data.badgeLabel;
    document.getElementById('doc-type-label').innerText = data.typeLabel;

    const canvas = document.getElementById('document-canvas');
    canvas.style.opacity = '0';
    setTimeout(() => {
        canvas.innerHTML = data.canvas;
        canvas.style.opacity = '1';
        const firstPart = Object.keys(data.parts)[0];
        selectPart(key, firstPart);
    }, 120);
}

/* 項目選択 */
function selectPart(docKey, partKey) {
    const part = docData[docKey]?.parts[partKey];
    if (!part) {
        return;
    }
    document.querySelectorAll('.interactive-box').forEach(box => {
        box.classList.remove('selected');
    });
    const selectedBox = document.getElementById('part-' + partKey);
    if (selectedBox) {
        selectedBox.classList.add('selected');
    }
    document.getElementById('exp-badge').innerText = part.badge;
    document.getElementById('exp-title').innerText = part.title;
    document.getElementById('exp-body').innerHTML = '<p>' + part.body + '</p>';
}

/* 初期表示 */
window.addEventListener('DOMContentLoaded', () => {
    switchDoc('hara');
});
