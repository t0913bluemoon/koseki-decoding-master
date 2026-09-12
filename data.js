/* ==========================================================
   戸籍解読マスター：データ定義
   ※このオブジェクトを編集すれば、表示内容を差し替えられます
========================================================== */
const docData = {

/* ==========================================================
   1. 原戸籍
========================================================== */
hara: {
    badgeLabel: '明治31年・大正4年式などの旧戸籍を読む',
    typeLabel: '改製原戸籍（はらこせき）',
    canvas: `
        <div class="koseki-paper border-4 border-slate-800 p-6 rounded-lg font-mincho h-full relative text-slate-900">
            <div class="absolute top-4 right-4 hanko-stamp">昭和初期式</div>
            <div class="text-center border-b-2 border-slate-800 pb-4 mb-6">
                <h4 class="text-2xl font-black tracking-[0.4em]">戸籍原簿抄本</h4>
            </div>
            <div class="border-b border-slate-300 pb-3 mb-5">
                <div class="text-[10px] text-slate-500 italic leading-none mb-1">戸主</div>
                <div class="text-lg font-bold">山田 次郎</div>
            </div>
            <div class="space-y-4">
                <div onclick="selectPart('hara','katoku')" id="part-katoku" class="interactive-box">
                    <span class="absolute -top-3 left-2 bg-slate-900 text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded shadow">
                        ① 戸主となった理由
                    </span>
                    <div class="text-[11px] leading-relaxed font-bold">
                        昭和15年5月10日 前戸主山田太郎 <strong>隠居</strong> ニ付家督相続
                    </div>
                </div>
                <div onclick="selectPart('hara','inkyo-person')" id="part-inkyo-person" class="interactive-box batsu-line border-rose-400 bg-rose-50/20">
                    <span class="absolute -top-3 left-2 bg-rose-700 text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded shadow">
                        ② 隠居した人
                    </span>
                    <div class="font-bold text-sm text-red-900">【家族】山田 太郎（隠居者）</div>
                    <div class="text-[10px]">明治20年4月1日生 / 昭和25年死亡</div>
                </div>
            </div>
        </div>
    `,
    parts: {
        katoku: {
            badge: '① 家督相続（かとくそうぞく）',
            title: '簡単にいうと「代表者が変わる」',
            body: '昔の制度では「家」を単位として相続する仕組みがありました。死亡だけでなく、隠居によって家督が引き継がれた場合も、このような記載が出てきます。'
        },
        'inkyo-person': {
            badge: '② 隠居（いんきょ）',
            title: '簡単にいうと「生前の引退」',
            body: '昔の制度で、家の代表者が生きているうちに跡継ぎへ交代することです。相続調査では、隠居した人のその後の記録も確認することが大切です。'
        }
    }
},

/* ==========================================================
   2. 転籍
========================================================== */
tenseki: {
    badgeLabel: '本籍地を別の場所へ移した記録',
    typeLabel: '転籍（てんせき）',
    canvas: `
        <div class="border-2 border-blue-700 p-6 rounded bg-blue-50/40 font-sans text-slate-900 h-full">
            <div class="text-center border-b-2 border-blue-800 pb-3 mb-6 font-bold text-base">戸籍事項（見本）</div>
            <div onclick="selectPart('tenseki','move')" id="part-move" class="interactive-box border-blue-400 bg-white">
                <span class="absolute -top-2.5 left-2 bg-blue-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">① 転籍</span>
                <div class="font-bold">本籍を東京都新宿区から北海道札幌市へ転籍</div>
                <div class="text-[10px] text-blue-900 mt-1">令和2年4月1日 転籍届出</div>
            </div>
            <div onclick="selectPart('tenseki','new-koseki')" id="part-new-koseki" class="interactive-box mt-5 border-indigo-400 bg-indigo-50/40">
                <span class="absolute -top-2.5 left-2 bg-indigo-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">② 転籍後</span>
                <div class="font-bold">転籍後の本籍地で戸籍を確認</div>
                <div class="text-[10px]">前の戸籍とのつながりを確認する入口になります。</div>
            </div>
        </div>
    `,
    parts: {
        move: {
            badge: '① 転籍（てんせき）',
            title: '簡単にいうと「本籍地のお引っ越し」',
            body: '本籍地を別の場所へ移すことです。相続調査では、現在の戸籍だけで終わらず、転籍前の戸籍も確認する必要がある場合があります。'
        },
        'new-koseki': {
            badge: '② 転籍後の戸籍',
            title: '「前の戸籍」につながるサイン',
            body: '転籍すると、転籍前の戸籍と転籍後の戸籍が調査上のつながりになります。戸籍を1枚だけ見るのではなく、前後の関係を確認します。'
        }
    }
},

/* ==========================================================
   3. 養子・認知
========================================================== */
tokushu: {
    badgeLabel: '相続人を確認するときに注意したい記載',
    typeLabel: '身分事項の特殊記載',
    canvas: `
        <div class="border-2 border-slate-700 p-6 rounded bg-white font-sans text-xs h-full relative text-slate-900">
            <div class="text-center border-b-2 border-slate-800 pb-3 mb-6 font-bold text-base">戸籍事項・身分事項（見本）</div>
            <div class="space-y-4">
                <div onclick="selectPart('tokushu','yoshi')" id="part-yoshi" class="interactive-box border-emerald-400 bg-emerald-50/40">
                    <span class="absolute -top-2.5 left-2 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">① 養子縁組</span>
                    <div class="font-bold">【名】山田 健太（養子）</div>
                    <div class="text-[10px] text-emerald-900 mt-1">平成10年3月15日 山田太郎と養子縁組届出</div>
                </div>
                <div onclick="selectPart('tokushu','ninchi')" id="part-ninchi" class="interactive-box border-amber-400 bg-amber-50/40">
                    <span class="absolute -top-2.5 left-2 bg-amber-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">② 認知</span>
                    <div class="font-bold">【名】佐藤 一郎（認知）</div>
                    <div class="text-[10px] text-amber-900 mt-1">平成18年6月20日 山田太郎より認知届出</div>
                </div>
                <div onclick="selectPart('tokushu','mukoyoshi')" id="part-mukoyoshi" class="interactive-box border-sky-400 bg-sky-50/40">
                    <span class="absolute -top-2.5 left-2 bg-sky-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">③ 婿養子縁組</span>
                    <div class="font-bold">【名】鈴木 一郎（夫）</div>
                    <div class="text-[10px] text-sky-900 mt-1">昭和35年4月1日 山田花子ト婚姻届出 同日山田太郎ト養子縁組届出 夫は氏を山田ト定メ本戸籍ニ入籍</div>
                </div>
            </div>
        </div>
    `,
    parts: {
        yoshi: {
            badge: '① 養子（ようし）',
            title: '簡単にいうと「法律上の親子になる」',
            body: '養子縁組によって法律上の親子関係が生じます。相続人調査では、養子に関する記載を見落とさないことが重要です。'
        },
        ninchi: {
            badge: '② 認知（にんち）',
            title: '簡単にいうと「父親が子どもだと認める」',
            body: '認知は、父が子を自分の子と認める制度です。相続人調査では、認知の記載がないか確認します。'
        },
        mukoyoshi: {
            badge: '③ 婿養子縁組（むこようしえんぐみ）',
            title: '簡単にいうと「結婚と養子縁組が同時に起きる」',
            body: '婚姻と同時に、夫が妻の親と養子縁組をする（＝妻の家の養子になる）ケースです。夫は妻の氏を名乗り、妻の親の戸籍に入ることが多く、婚姻の記載と養子縁組の記載が同じ身分事項の中に一緒に出てきます。相続人調査では、婚姻の届出日と養子縁組の届出日が同じ・近い場合に見落としやすいので、両方の記載を確認します。'
        }
    }
},

/* ==========================================================
   4. 分籍
========================================================== */
bunseki: {
    badgeLabel: '親の戸籍から別の戸籍へ移った記録',
    typeLabel: '分籍（ぶんせき）',
    canvas: `
        <div class="border-2 border-emerald-700 p-6 rounded bg-emerald-50/30 font-sans text-slate-900 h-full">
            <div class="text-center border-b-2 border-emerald-800 pb-3 mb-6 font-bold text-base">戸籍事項（見本）</div>
            <div onclick="selectPart('bunseki','leave')" id="part-leave" class="interactive-box border-emerald-400 bg-white">
                <span class="absolute -top-2.5 left-2 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">① 分籍</span>
                <div class="font-bold">山田 健太　分籍</div>
                <div class="text-[10px] text-emerald-900 mt-1">平成20年8月1日 分籍届出</div>
            </div>
            <div onclick="selectPart('bunseki','trace')" id="part-trace" class="interactive-box mt-5 border-teal-400 bg-teal-50">
                <span class="absolute -top-2.5 left-2 bg-teal-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">② 調査ポイント</span>
                <div class="font-bold">分籍後は別の戸籍へ</div>
                <div class="text-[10px]">親の戸籍だけを見て終わらないようにします。</div>
            </div>
        </div>
    `,
    parts: {
        leave: {
            badge: '① 分籍（ぶんせき）',
            title: '簡単にいうと「戸籍から独立」',
            body: '一定の場合に、親の戸籍から抜けて自分を筆頭者とする戸籍を作ることです。相続調査では、その後の戸籍をたどる必要がある場合があります。'
        },
        trace: {
            badge: '② 分籍後の追跡',
            title: '「別の戸籍」を確認する',
            body: '分籍の記載を見つけたら、分籍後の戸籍につながる情報を確認します。'
        }
    }
},

/* ==========================================================
   5. 婚姻・離婚
========================================================== */
kekkon: {
    badgeLabel: '配偶者や前婚を確認するときのポイント',
    typeLabel: '婚姻・離婚',
    canvas: `
        <div class="border-2 border-rose-700 p-6 rounded bg-rose-50/30 font-sans text-slate-900 h-full">
            <div class="text-center border-b-2 border-rose-800 pb-3 mb-6 font-bold text-base">身分事項（見本）</div>
            <div onclick="selectPart('kekkon','marriage')" id="part-marriage" class="interactive-box border-rose-400 bg-white">
                <span class="absolute -top-2.5 left-2 bg-rose-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">① 婚姻</span>
                <div class="font-bold">山田 太郎　婚姻　佐藤 花子</div>
                <div class="text-[10px] text-rose-900 mt-1">平成5年5月10日 婚姻届出</div>
            </div>
            <div onclick="selectPart('kekkon','divorce')" id="part-divorce" class="interactive-box mt-5 border-orange-400 bg-orange-50">
                <span class="absolute -top-2.5 left-2 bg-orange-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">② 離婚</span>
                <div class="font-bold">山田 太郎　離婚　佐藤 花子</div>
                <div class="text-[10px] text-orange-900 mt-1">平成15年9月1日 協議離婚届出</div>
            </div>
        </div>
    `,
    parts: {
        marriage: {
            badge: '① 婚姻（こんいん）',
            title: '「配偶者がいる」ことを確認する記載',
            body: '婚姻の記載から、配偶者との関係を確認します。相続人調査では、現在の婚姻だけでなく、前婚の有無も確認します。'
        },
        divorce: {
            badge: '② 離婚（りこん）',
            title: '「前の家族」を確認する手がかり',
            body: '離婚の記載は、前婚とその後の戸籍上の動きを確認する手がかりになります。子どもの有無なども含めて前後の記録を確認します。'
        }
    }
},

/* ==========================================================
   6. 後見人（新規追加）
========================================================== */
koken: {
    badgeLabel: '親権者がいない場合などに置かれる後見人の記載',
    typeLabel: '後見人（こうけんにん）',
    canvas: `
        <div class="border-2 border-fuchsia-700 p-6 rounded bg-fuchsia-50/30 font-sans text-xs h-full relative text-slate-900">
            <div class="text-center border-b-2 border-fuchsia-800 pb-3 mb-6 font-bold text-base">身分事項（見本）</div>
            <div class="space-y-4">
                <div onclick="selectPart('koken','shuushoku')" id="part-shuushoku" class="interactive-box border-fuchsia-400 bg-white">
                    <span class="absolute -top-2.5 left-2 bg-fuchsia-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        ① 後見人に就職
                    </span>
                    <div class="font-bold">【身分事項】後見開始</div>
                    <div class="text-[10px] text-fuchsia-900 mt-1">
                        昭和35年6月10日 父山田太郎親権喪失ニ付後見開始
                        <br>
                        同日 後見人山田花子後見人ニ就職
                    </div>
                </div>
                <div onclick="selectPart('koken','fuyou')" id="part-fuyou" class="interactive-box mt-5 border-slate-400 bg-slate-50">
                    <span class="absolute -top-2.5 left-2 bg-slate-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        ② 後見人を要しない
                    </span>
                    <div class="font-bold">【身分事項】後見終了</div>
                    <div class="text-[10px] text-slate-700 mt-1">
                        昭和53年4月1日 成年ニ達シタルニ因リ後見人ヲ要セザルニ至ル
                    </div>
                </div>
            </div>
        </div>
    `,
    parts: {
        shuushoku: {
            badge: '① 後見人に就職',
            title: '簡単にいうと「後見人が決まった」',
            body: '親権者がいない場合や、親権を行う人がいなくなった場合などに、本人のために後見人が選ばれ、その職務に就くことを「後見人に就職」といいます。相続人調査では、誰がいつ後見人になったかも、身分関係を確認する手がかりになります。'
        },
        fuyou: {
            badge: '② 後見人を要しない',
            title: '簡単にいうと「後見が必要なくなった」',
            body: '成年に達したことなどを理由に、後見人による保護が必要ではなくなった場合に、この記載がされます。後見の開始と終了の時期を確認することで、その人の身分関係の変遷を追うことができます。'
        }
    }
},

/* ==========================================================
   7. 附票
========================================================== */
fuhyo: {
    badgeLabel: '住所のつながりを確認するときに役立つ記録',
    typeLabel: '戸籍の附票',
    canvas: `
        <div class="bg-amber-50/40 border-2 border-amber-200 p-6 rounded h-full font-sans text-slate-900">
            <h4 class="text-center font-bold border-b-2 border-amber-600 pb-3 mb-6">戸籍の附票の写し</h4>
            <div onclick="selectPart('fuhyo','fuhyo-list')" id="part-fuhyo-list" class="interactive-box border-amber-400 bg-white">
                <span class="absolute -top-2.5 left-2 bg-amber-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">住所履歴</span>
                <table class="fuhyo-table mt-1">
                    <thead>
                        <tr class="bg-amber-100">
                            <th>記録日</th>
                            <th>住所の変遷</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>H20</td><td>東京都新宿区…</td></tr>
                        <tr><td>H25</td><td>神奈川県横浜市…</td></tr>
                        <tr class="bg-amber-50 font-bold"><td>R2</td><td>大阪府大阪市…（現在）</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    parts: {
        'fuhyo-list': {
            badge: '戸籍の附票',
            title: '簡単にいうと「住所の履歴」',
            body: '戸籍の附票では、その戸籍に記録されている住所の履歴を確認できます。不動産の登記住所などと現在の住所がつながらない場合に、確認する手がかりになります。'
        }
    }
},

/* ==========================================================
   8. 除籍
========================================================== */
joseki: {
    badgeLabel: 'その戸籍から全員がいなくなった状態',
    typeLabel: '除籍謄本（じょせき）',
    canvas: `
        <div class="border-2 border-red-800 p-6 rounded bg-red-50/20 font-sans text-xs relative h-full text-slate-900">
            <div class="absolute top-2 left-2 border-2 border-red-600 text-red-600 font-black px-2 py-0.5 rounded text-sm transform -rotate-6">除 籍</div>
            <div class="text-center border-b-2 border-slate-800 pb-3 mb-6 pt-4 text-base font-bold">除 籍 謄 本</div>
            <div onclick="selectPart('joseki','removed')" id="part-removed" class="interactive-box batsu-line border-red-400 bg-white">
                <div class="font-bold text-red-700 text-sm">【名】山田 次郎（除籍）</div>
                <div class="text-[10px] mt-1">令和5年10月10日 死亡届出により除籍</div>
            </div>
        </div>
    `,
    parts: {
        removed: {
            badge: '除籍の意味',
            title: '簡単にいうと「全員がいなくなった戸籍」',
            body: '戸籍に記載されている人が全員いなくなると、その戸籍は除籍になります。相続人調査では、複数の戸籍を前後につないで確認していくことが大切です。'
        }
    }
},

/* ==========================================================
   9. 改製
========================================================== */
kaisei: {
    badgeLabel: '戸籍の様式が変わったときの前後関係',
    typeLabel: '改製（かいせい）',
    canvas: `
        <div class="border-2 border-violet-700 p-6 rounded bg-violet-50/30 font-sans text-slate-900 h-full">
            <div class="text-center border-b-2 border-violet-800 pb-3 mb-6 font-bold text-base">改製原戸籍・現在戸籍（見本）</div>
            <div onclick="selectPart('kaisei','old')" id="part-old" class="interactive-box border-violet-400 bg-white">
                <span class="absolute -top-2.5 left-2 bg-violet-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">① 改製前</span>
                <div class="font-bold">改製原戸籍　旧様式の戸籍</div>
                <div class="text-[10px] text-violet-900 mt-1">改製前の記載を確認する。</div>
            </div>
            <div onclick="selectPart('kaisei','new')" id="part-new" class="interactive-box mt-5 border-purple-400 bg-purple-50">
                <span class="absolute -top-2.5 left-2 bg-purple-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">② 改製後</span>
                <div class="font-bold">現在戸籍　新しい様式</div>
                <div class="text-[10px]">新しい戸籍だけでは過去の情報がすべて見えないことがあります。</div>
            </div>
        </div>
    `,
    parts: {
        old: {
            badge: '① 改製前の戸籍',
            title: '「前の戸籍」を確認する',
            body: '戸籍の様式が変わると、新しい様式の戸籍が作られます。相続人調査では、必要に応じて改製原戸籍までさかのぼって確認します。'
        },
        new: {
            badge: '② 改製後の戸籍',
            title: '「新しい戸籍」だけで終わらない',
            body: '現在の戸籍に表示されていない過去の事項を確認するため、改製原戸籍とのつながりを確認します。'
        }
    }
},

/* ==========================================================
   10. 出生・死亡
========================================================== */
shusshi: {
    badgeLabel: '相続開始日を確認する一番基本の記載',
    typeLabel: '出生・死亡',
    canvas: `
        <div class="border-2 border-sky-700 p-6 rounded bg-sky-50/30 font-sans text-xs h-full relative text-slate-900">
            <div class="text-center border-b-2 border-sky-800 pb-3 mb-6 font-bold text-base">身分事項（見本）</div>
            <div class="space-y-4">
                <div onclick="selectPart('shusshi','birth')" id="part-birth" class="interactive-box border-sky-400 bg-white">
                    <span class="absolute -top-2.5 left-2 bg-sky-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">① 出生</span>
                    <div class="font-bold">【名】山田 太郎</div>
                    <div class="text-[10px] text-sky-900 mt-1">昭和20年4月1日 東京都新宿区で出生　同日届出</div>
                </div>
                <div onclick="selectPart('shusshi','death')" id="part-death" class="interactive-box mt-5 batsu-line border-slate-500 bg-slate-100">
                    <span class="absolute -top-2.5 left-2 bg-slate-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">② 死亡</span>
                    <div class="font-bold text-red-900">【名】山田 太郎</div>
                    <div class="text-[10px] mt-1">令和6年1月10日 死亡　同月15日届出</div>
                </div>
            </div>
        </div>
    `,
    parts: {
        birth: {
            badge: '① 出生（しゅっせい）',
            title: '簡単にいうと「生まれたときの記録」',
            body: '出生の記載には、生まれた日や場所、届出をした人などが書かれます。相続人調査では、この記載から出生日や本籍とのつながりを確認します。'
        },
        death: {
            badge: '② 死亡（しぼう）',
            title: '簡単にいうと「相続が始まる日」',
            body: '死亡の記載は、相続が開始する日を確認するための最も基本的な記載です。死亡日・死亡場所・届出人などをあわせて確認します。'
        }
    }
},

/* ==========================================================
   11. 養子離縁
========================================================== */
rien: {
    badgeLabel: '養子縁組が解消された記録',
    typeLabel: '養子離縁（りえん）',
    canvas: `
        <div class="border-2 border-teal-700 p-6 rounded bg-teal-50/30 font-sans text-slate-900 h-full">
            <div class="text-center border-b-2 border-teal-800 pb-3 mb-6 font-bold text-base">身分事項（見本）</div>
            <div onclick="selectPart('rien','rien')" id="part-rien" class="interactive-box batsu-line border-teal-400 bg-white">
                <span class="absolute -top-2.5 left-2 bg-teal-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">養子離縁</span>
                <div class="font-bold">【名】山田 健太（養子）</div>
                <div class="text-[10px] text-teal-900 mt-1">令和2年7月1日 山田太郎と協議離縁届出</div>
            </div>
        </div>
    `,
    parts: {
        rien: {
            badge: '養子離縁（ようしりえん）',
            title: '簡単にいうと「養子関係の解消」',
            body: '養子縁組によって生じた親子関係を解消することです。離縁が成立すると、原則としてその養親子間の相続関係はなくなります。相続人調査では、離縁の日付を必ず確認します。'
        }
    }
},

/* ==========================================================
   12. 準正
========================================================== */
junsei: {
    badgeLabel: '婚姻していない父母が結婚し、子が嫡出子となる記載',
    typeLabel: '準正（じゅんせい）',
    canvas: `
        <div class="border-2 border-lime-700 p-6 rounded bg-lime-50/30 font-sans text-slate-900 h-full">
            <div class="text-center border-b-2 border-lime-800 pb-3 mb-6 font-bold text-base">身分事項（見本）</div>
            <div onclick="selectPart('junsei','junsei')" id="part-junsei" class="interactive-box border-lime-500 bg-white">
                <span class="absolute -top-2.5 left-2 bg-lime-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">準正</span>
                <div class="font-bold">【名】山田 一郎</div>
                <div class="text-[10px] text-lime-900 mt-1">平成12年11月3日 父山田太郎母佐藤花子婚姻届出により準正</div>
            </div>
        </div>
    `,
    parts: {
        junsei: {
            badge: '準正（じゅんせい）',
            title: '簡単にいうと「あとから嫡出子になる」',
            body: '結婚していない父母の間に生まれた子が、父母の婚姻によって嫡出子としての身分を得ることを準正といいます。相続分の考え方に関わるため、記載があれば見落とさないようにします。'
        }
    }
},

/* ==========================================================
   13. 入籍・復籍
========================================================== */
nyuuseki: {
    badgeLabel: '戸籍に入る・もとの戸籍へ戻る記載',
    typeLabel: '入籍・復籍',
    canvas: `
        <div class="border-2 border-cyan-700 p-6 rounded bg-cyan-50/30 font-sans text-xs h-full relative text-slate-900">
            <div class="text-center border-b-2 border-cyan-800 pb-3 mb-6 font-bold text-base">戸籍事項（見本）</div>
            <div class="space-y-4">
                <div onclick="selectPart('nyuuseki','nyuuseki')" id="part-nyuuseki" class="interactive-box border-cyan-400 bg-white">
                    <span class="absolute -top-2.5 left-2 bg-cyan-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">① 入籍</span>
                    <div class="font-bold">【名】山田 桜子</div>
                    <div class="text-[10px] text-cyan-900 mt-1">平成15年2月1日 母の氏を称する入籍届出により山田太郎の戸籍に入籍</div>
                </div>
                <div onclick="selectPart('nyuuseki','fukuseki')" id="part-fukuseki" class="interactive-box mt-5 border-blue-400 bg-blue-50/40">
                    <span class="absolute -top-2.5 left-2 bg-blue-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">② 復籍</span>
                    <div class="font-bold">【名】佐藤 花子</div>
                    <div class="text-[10px] text-blue-900 mt-1">平成20年5月10日 離婚により実父佐藤一郎の戸籍に復籍</div>
                </div>
            </div>
        </div>
    `,
    parts: {
        nyuuseki: {
            badge: '① 入籍（にゅうせき）',
            title: '簡単にいうと「戸籍に入ること」',
            body: '婚姻・養子縁組・氏の変更などをきっかけに、ある戸籍に新しく入ることを入籍といいます。誰の戸籍にいつ入ったかは、相続関係を確認するうえで重要な手がかりです。'
        },
        fukuseki: {
            badge: '② 復籍（ふくせき）',
            title: '簡単にいうと「もとの戸籍に戻ること」',
            body: '離婚や離縁などによって、もといた親の戸籍に戻ることを復籍といいます。復籍先の戸籍を確認することで、その人のそれまでの身分関係をたどることができます。'
        }
    }
},

/* ==========================================================
   14. 氏の変更
========================================================== */
seimei: {
    badgeLabel: '婚姻・離婚以外の理由で名字が変わる記載',
    typeLabel: '氏（うじ）の変更',
    canvas: `
        <div class="border-2 border-orange-700 p-6 rounded bg-orange-50/30 font-sans text-slate-900 h-full">
            <div class="text-center border-b-2 border-orange-800 pb-3 mb-6 font-bold text-base">戸籍事項（見本）</div>
            <div onclick="selectPart('seimei','henkou')" id="part-henkou" class="interactive-box border-orange-400 bg-white">
                <span class="absolute -top-2.5 left-2 bg-orange-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">氏の変更</span>
                <div class="font-bold">戸籍の筆頭者の氏を「山田」から「山本」に変更</div>
                <div class="text-[10px] text-orange-900 mt-1">令和3年9月1日 家庭裁判所の許可を得て氏変更届出</div>
            </div>
        </div>
    `,
    parts: {
        henkou: {
            badge: '氏の変更（うじのへんこう）',
            title: '簡単にいうと「名字だけが変わること」',
            body: '婚姻や離婚とは別に、家庭裁判所の許可を得るなどして氏（名字）が変わることがあります。相続人調査では、同一人物であることを確認するための手がかりになります。'
        }
    }
},

/* ==========================================================
   15. 親権
========================================================== */
shinken: {
    badgeLabel: '親権者の指定・喪失・辞任に関する記載',
    typeLabel: '親権（しんけん）',
    canvas: `
        <div class="border-2 border-indigo-700 p-6 rounded bg-indigo-50/30 font-sans text-xs h-full relative text-slate-900">
            <div class="text-center border-b-2 border-indigo-800 pb-3 mb-6 font-bold text-base">身分事項（見本）</div>
            <div class="space-y-4">
                <div onclick="selectPart('shinken','shitei')" id="part-shitei" class="interactive-box border-indigo-400 bg-white">
                    <span class="absolute -top-2.5 left-2 bg-indigo-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">① 親権者の指定</span>
                    <div class="font-bold">【名】山田 桜子</div>
                    <div class="text-[10px] text-indigo-900 mt-1">令和1年6月1日 父母離婚　母山田花子を親権者と定める</div>
                </div>
                <div onclick="selectPart('shinken','soshitsu')" id="part-soshitsu" class="interactive-box mt-5 border-purple-400 bg-purple-50/40">
                    <span class="absolute -top-2.5 left-2 bg-purple-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">② 親権喪失・辞任</span>
                    <div class="font-bold">【名】山田 太郎</div>
                    <div class="text-[10px] text-purple-900 mt-1">令和2年3月1日 親権喪失の審判確定</div>
                </div>
            </div>
        </div>
    `,
    parts: {
        shitei: {
            badge: '① 親権者の指定',
            title: '簡単にいうと「どちらが育てるかを決める」',
            body: '父母が離婚するときなどに、どちらが親権者になるかを定めた記載です。未成年の子がいる場合、この記載から養育していた親を確認できます。'
        },
        soshitsu: {
            badge: '② 親権の喪失・辞任',
            title: '簡単にいうと「親権がなくなること」',
            body: '親権者が親権を失う、または自ら辞任することがあります。親権を失った場合、後見人が選ばれることも多く、後見人の記載とあわせて確認します。'
        }
    }
},

/* ==========================================================
   16. 失踪宣告
========================================================== */
shissou: {
    badgeLabel: '生死不明の人を法律上死亡したとみなす記載',
    typeLabel: '失踪宣告（しっそうせんこく）',
    canvas: `
        <div class="border-2 border-stone-700 p-6 rounded bg-stone-100 font-sans text-slate-900 h-full">
            <div class="text-center border-b-2 border-stone-800 pb-3 mb-6 font-bold text-base">身分事項（見本）</div>
            <div onclick="selectPart('shissou','shissou')" id="part-shissou" class="interactive-box batsu-line border-stone-500 bg-white">
                <span class="absolute -top-2.5 left-2 bg-stone-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">失踪宣告</span>
                <div class="font-bold text-stone-900">【名】山田 次郎</div>
                <div class="text-[10px] mt-1">令和4年12月1日 失踪宣告の審判確定により令和元年12月1日死亡とみなす</div>
            </div>
        </div>
    `,
    parts: {
        shissou: {
            badge: '失踪宣告（しっそうせんこく）',
            title: '簡単にいうと「行方不明の人を死亡とみなす」',
            body: '長期間生死がわからない人について、家庭裁判所の審判により法律上死亡したものとみなす制度です。実際に審判が確定した日と、死亡したとみなされる日が異なる点に注意して確認します。'
        }
    }
},

/* ==========================================================
   17. 推定相続人の廃除
========================================================== */
haijo: {
    badgeLabel: '特定の推定相続人の相続権を失わせる記載',
    typeLabel: '推定相続人の廃除',
    canvas: `
        <div class="border-2 border-red-700 p-6 rounded bg-red-50/20 font-sans text-slate-900 h-full">
            <div class="text-center border-b-2 border-red-800 pb-3 mb-6 font-bold text-base">身分事項（見本）</div>
            <div onclick="selectPart('haijo','haijo')" id="part-haijo" class="interactive-box batsu-line border-red-400 bg-white">
                <span class="absolute -top-2.5 left-2 bg-red-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">推定相続人の廃除</span>
                <div class="font-bold text-red-900">【名】山田 一郎</div>
                <div class="text-[10px] mt-1">令和3年8月20日 推定相続人廃除の審判確定</div>
            </div>
        </div>
    `,
    parts: {
        haijo: {
            badge: '推定相続人の廃除',
            title: '簡単にいうと「相続権を失わせる」',
            body: '被相続人に対する虐待や重大な非行などを理由に、家庭裁判所の審判によって特定の推定相続人の相続権を失わせる制度です。廃除の記載がある場合、その人は相続人にならないため、調査上見落とせない記載です。'
        }
    }
},

/* ==========================================================
   18. 国籍の得喪・帰化
========================================================== */
kokuseki: {
    badgeLabel: '相続人に外国籍が関わる場合の記載',
    typeLabel: '国籍の得喪・帰化',
    canvas: `
        <div class="border-2 border-yellow-700 p-6 rounded bg-yellow-50/30 font-sans text-xs h-full relative text-slate-900">
            <div class="text-center border-b-2 border-yellow-800 pb-3 mb-6 font-bold text-base">戸籍事項（見本）</div>
            <div class="space-y-4">
                <div onclick="selectPart('kokuseki','kika')" id="part-kika" class="interactive-box border-yellow-500 bg-white">
                    <span class="absolute -top-2.5 left-2 bg-yellow-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">① 帰化</span>
                    <div class="font-bold">【名】山田 太郎（帰化）</div>
                    <div class="text-[10px] text-yellow-900 mt-1">平成28年3月1日 帰化届出（帰化前の氏名・国籍等が記載されます）</div>
                </div>
                <div onclick="selectPart('kokuseki','soshitsu2')" id="part-soshitsu2" class="interactive-box mt-5 border-amber-500 bg-amber-50/40">
                    <span class="absolute -top-2.5 left-2 bg-amber-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">② 国籍喪失</span>
                    <div class="font-bold">【名】山田 花子</div>
                    <div class="text-[10px] text-amber-900 mt-1">令和2年4月1日 外国国籍取得により日本国籍喪失</div>
                </div>
            </div>
        </div>
    `,
    parts: {
        kika: {
            badge: '① 帰化（きか）',
            title: '簡単にいうと「日本国籍を取得すること」',
            body: '外国籍の人が、日本国籍を取得することを帰化といいます。帰化前の氏名や国籍が記載されるため、同一人物であることを確認する手がかりになります。'
        },
        soshitsu2: {
            badge: '② 国籍喪失',
            title: '簡単にいうと「日本国籍を失うこと」',
            body: '外国の国籍を取得したことなどにより、日本国籍を失うことがあります。相続人に国籍の変動がある場合、戸籍だけでなく別の資料もあわせて確認することがあります。'
        }
    }
}
};