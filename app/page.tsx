"use client";

import React from "react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100 font-sans">

      {/* メイン職務経歴書コンテンツ */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        {/* 基本情報ヘッダー */}
        <section className="mb-16 border-b border-stone-200/60 dark:border-stone-800/60 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white mb-3 font-sans">
                有村 太郎
              </h1>
              <p className="text-lg md:text-xl text-amber-700 dark:text-amber-500 font-medium tracking-wide">
                フロントエンドエンジニア
              </p>
            </div>
          </div>
        </section>

        {/* キャリアビジョン */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1.5 w-6 bg-stone-900 dark:bg-stone-100"></span>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 dark:text-white uppercase font-sans">
              キャリアビジョン
            </h2>
          </div>

          <div className="bg-white dark:bg-stone-900/10 border border-stone-200/50 dark:border-stone-800/50 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 dark:text-white mb-4 border-l-4 border-amber-600 pl-3 leading-snug">
              圧倒的な個の力で複数プロジェクトを推進できる技術リーダー
            </h3>

            <div className="space-y-4 text-stone-800 dark:text-stone-200 text-sm leading-relaxed">
              <p>フロントエンドのテックリードとして、AIを活用しながら「圧倒的な個の力で複数プロジェクトを推進できる技術リーダー」を目指しています。</p>
              <p>現時点では、1プロダクトをテックリードとして推進することが主な役割となっており、複数プロダクトを同時にリードするにはまだキャパシティが不足していること認識しています。しかし、AIの進化により開発生産性が大きく向上している現在においては、個の能力を拡張することで、少人数でも複数プロジェクトを推進できる環境が整いつつあると考えています。</p>
              <p>これまでの開発では、チームの人数を増やして開発規模を拡張するアプローチが主流でしたが、AIの進化により、少人数でも大規模な開発を推進できる時代に移行していると考えています。そのため、組織規模に依存せず、設計力・技術判断力・AI活用力を高めることで、1人あたりの生産性を最大化し、複数プロジェクトを横断的にリードできるエンジニアを目指しています。</p>
              <p>具体的には以下の領域を強化していきたいと考えています。</p>
            </div>

            <div className="my-6 pl-4 border-l-2 border-stone-300 dark:border-stone-700 space-y-1 text-sm font-medium text-amber-800 dark:text-amber-400">
              <p>・フロントエンドアーキテクチャ設計</p>
              <p>・パフォーマンス最適化</p>
              <p>・Next.js / React を中心とした設計力の向上</p>
              <p>・AIを活用した開発生産性の最大化</p>
              <p>・技術戦略および技術選定の推進</p>
            </div>

            <div className="space-y-4 text-stone-800 dark:text-stone-200 text-sm leading-relaxed">
              <p>将来的には、複数プロダクトを横断して技術的な意思決定を行うフロントエンド責任者や、技術戦略をリード出来る人員となり、事業成長に貢献していきたいと考えています。</p>
              <p>また、技術力だけでなく、開発プロセス改善やチーム全体の生産性向上にも関与し、少人数でも高いアウトプットを実現できる開発体制の構築にも取り組んでいきたいと考えています。</p>
            </div>
          </div>
        </section>

        {/* プロジェクト経験 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-1.5 w-6 bg-stone-900 dark:bg-stone-100"></span>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 dark:text-white uppercase font-sans">
              プロジェクト経験（最新順）
            </h2>
          </div>

          <div className="space-y-16">

            {/* 会社グループ：株式会社mediba */}
            <div className="relative">
              <div className="mb-8 flex flex-col md:flex-row md:items-baseline gap-2 pb-3 border-b border-stone-200 dark:border-stone-800">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white flex items-center gap-2">
                  <span className="h-3 w-3 bg-amber-600 rounded-sm"></span>
                  株式会社mediba
                </h3>
              </div>

              <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-4 pl-6 space-y-12 md:pl-8">

                {/* プロジェクト1: 大手通信キャリアの既存ポイントサービスに付随する新規サブサービス開発 */}
                <div className="relative group transition-all">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1.5 h-4 w-4 rounded-full border-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950 group-hover:border-amber-600 transition-colors"></span>
                  <div className="p-6 md:p-8 bg-white dark:bg-stone-900/10 border border-stone-200/50 dark:border-stone-800/50 rounded-2xl hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-stone-900 dark:text-white tracking-tight">
                        大手通信キャリアの既存ポイントサービスに付随する新規サブサービス開発
                      </h4>
                      <span className="text-xs font-bold tracking-wider text-amber-700 dark:text-amber-500 uppercase">
                        2026年3月~現在
                      </span>
                    </div>

                    <div className="text-stone-800 dark:text-stone-200 text-sm leading-relaxed mb-6 space-y-3">
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-stone-500 dark:text-stone-400">
                        <span><strong>役割</strong>: テックリード (WebアプリのFEのリーダー)</span>
                        <span><strong>ステータス</strong>: 要件定義〜リリースに向けて対応中</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-stone-900 dark:text-white mb-1">概要</h5>
                        <p>既存サービスとの連携を前提とした新規サブサービスの立ち上げにおいて、要件定義からリリースまでをテックリードとして推進。開発体制・ルール・環境をゼロから整備し、技術リードに留まらずチームの生産性向上を目的としたマネジメント領域にも積極的に関与。</p>
                      </div>
                    </div>

                    {/* 詳細グリッド */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-stone-100 dark:border-stone-800/60">
                      <div className="md:col-span-1 space-y-4">
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">担当工程</h5>
                          <div className="flex flex-wrap gap-1">
                            {["要件定義", "設計", "コーディング", "テスト"].map((tag, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">役割</h5>
                          <div className="flex flex-wrap gap-1">
                            {["フロントエンド"].map((tag, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">使用技術</h5>
                          <div className="flex flex-wrap gap-1">
                            {["TypeScript", "Next.js", "React", "Amazon ECS", "CI/CD", "Claude Code", "Docker", "Git", "GitHub", "GitHub Actions", "Playwright", "CSS", "E2E"].map((tech, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] font-semibold bg-amber-50 text-amber-900 border border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30 dark:text-amber-400 rounded">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3 space-y-6">
                        <div>
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-3">実施内容</h5>
                          <div className="space-y-4">
                            <div>
                              <h6 className="text-xs font-bold text-stone-900 dark:text-white border-l-2 border-amber-600 pl-2 mb-1">AI 活用による開発生産性向上</h6>
                              <ul className="list-disc list-inside text-xs text-stone-600 dark:text-stone-400 pl-2 space-y-1">
                                <li>チーム全体で利用できる AI 開発環境（Claude Code）を構築・整備</li>
                                <li>コード生成・レビュー・画面実装（8 ステップワークフロー）・設計補助など用途別のカスタムスキルを設計・実装</li>
                                <li>プロンプト・利用ルールの共有によりメンバー間の AI 活用レベルを平準化</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-xs font-bold text-stone-900 dark:text-white border-l-2 border-amber-600 pl-2 mb-1">開発環境・CI/CD の構築</h6>
                              <ul className="list-disc list-inside text-xs text-stone-600 dark:text-stone-400 pl-2 space-y-1">
                                <li>Next.js v15（App Router）＋ React 19 ＋ TypeScript によるフロントエンド基盤をゼロから設計</li>
                                <li>Docker による本番・ローカル開発環境の整備</li>
                                <li>GitHub Actions によるデプロイパイプラインの構築</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-xs font-bold text-stone-900 dark:text-white border-l-2 border-amber-600 pl-2 mb-1">開発ルールの整備</h6>
                              <ul className="list-disc list-inside text-xs text-stone-600 dark:text-stone-400 pl-2 space-y-1">
                                <li>コーディング規約・アーキテクチャ方針（Container-Presenter パターン、Server/Client Component 分離）を策定</li>
                                <li>デザインシステム連携ルール、ブランチ戦略、レビュー基準を文書化しリポジトリに内包</li>
                                <li>UT(Vitest) + IT(Playwright + <code>next/experimental/testmode/playwright</code>) + E2E(Playwright MCP + 自然言語) の3層構造のテスト戦略の策定</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-xs font-bold text-stone-900 dark:text-white border-l-2 border-amber-600 pl-2 mb-1">チームビルディング</h6>
                              <ul className="list-disc list-inside text-xs text-stone-600 dark:text-stone-400 pl-2 space-y-1">
                                <li>ワーキングアグリーメントの策定・1on1 等のチームビルディングイベントを企画・実施</li>
                                <li>開発初期段階からチーム内の認識統一を図り、スムーズな開発体制を構築</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-xs font-bold text-stone-900 dark:text-white border-l-2 border-amber-600 pl-2 mb-1">他職能との連携</h6>
                              <p className="text-xs text-stone-600 dark:text-stone-400 pl-2">要件定義フェーズからデザイナー・バックエンドエンジニア・プロダクトマネージャーと連携し、技術的課題を早期に洗い出し</p>
                            </div>
                          </div>
                        </div>

                        {/* 技術スタックテーブル */}
                        <div className="pt-4 border-t border-stone-100 dark:border-stone-800/60">
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-3">技術スタック</h5>
                          <div className="overflow-x-auto">
                            <table className="min-w-full text-xs text-stone-600 dark:text-stone-400">
                              <thead>
                                <tr className="border-b border-stone-200 dark:border-stone-800">
                                  <th className="py-2 text-left font-bold text-stone-500 dark:text-stone-500 w-1/3">分類</th>
                                  <th className="py-2 text-left font-bold text-stone-500 dark:text-stone-500">技術</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-stone-100 dark:divide-stone-900">
                                <tr>
                                  <td className="py-2 font-medium">フレームワーク</td>
                                  <td className="py-2">Next.js v15（App Router）、React 19</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-medium">言語</td>
                                  <td className="py-2">TypeScript</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-medium">スタイル</td>
                                  <td className="py-2">Sass、CSS Modules</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-medium">テスト</td>
                                  <td className="py-2">Vitest、Testing Library、Playwright、MSW</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-medium">UI カタログ</td>
                                  <td className="py-2">Storybook</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-medium">インフラ</td>
                                  <td className="py-2">Docker</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-medium">CI/CD</td>
                                  <td className="py-2">GitHub Actions</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-medium">AI</td>
                                  <td className="py-2">Claude Code（カスタムスキル構築・チーム展開）</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* プロジェクト2: 採用業務 */}
                <div className="relative group transition-all">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1.5 h-4 w-4 rounded-full border-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950 group-hover:border-amber-600 transition-colors"></span>
                  <div className="p-6 md:p-8 bg-white dark:bg-stone-900/10 border border-stone-200/50 dark:border-stone-800/50 rounded-2xl hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-stone-900 dark:text-white tracking-tight">
                        採用業務
                      </h4>
                      <span className="text-xs font-bold tracking-wider text-amber-700 dark:text-amber-500 uppercase">
                        2026年3月~現在
                      </span>
                    </div>

                    <div className="text-stone-800 dark:text-stone-200 text-sm leading-relaxed mb-6 space-y-3">
                      <h5 className="font-bold text-stone-900 dark:text-white">フロントエンドエンジニアの技術面談を担当し、採用精度向上に貢献</h5>
                      <p>フロントエンドエンジニアの新卒のカジュアル面談および中途の1次面談を担当し、技術的観点から候補者のレベル判定とチーム適合性の判断を行っています。単なるコーディング能力ではなく、設計力・Web基礎知識・パフォーマンス意識などを評価し、即戦力となるエンジニアの採用に貢献しています。</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-stone-100 dark:border-stone-800/60">
                      <div className="md:col-span-1 space-y-4">
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">担当工程</h5>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">その他</span>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">役割</h5>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">エンジニア採用/人事</span>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">使用技術</h5>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 text-[10px] text-stone-400 dark:text-stone-500 italic">特になし</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3 space-y-6">
                        <div>
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-3">面談で意識しているポイント</h5>
                          <div className="space-y-4">
                            <div>
                              <h6 className="text-xs font-bold text-stone-900 dark:text-white border-l-2 border-amber-600 pl-2 mb-1.5">■ アイスブレイクによる本来の実力の引き出し</h6>
                              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-2">候補者がリラックスして話せるよう、技術トピックを中心にアイスブレイクを実施しています。これにより、緊張によるパフォーマンス低下を防ぎ、候補者の実力を正確に把握できるようにしています。</p>
                              <div className="flex flex-wrap gap-1.5">
                                {["最近触っている技術の話", "興味のあるフロントエンド技術", "過去の開発経験", "趣味の話、経歴"].map((ex, idx) => (
                                  <span key={idx} className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-300 rounded">{ex}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h6 className="text-xs font-bold text-stone-900 dark:text-white border-l-2 border-amber-600 pl-2 mb-1.5">■ コーダーではなく「エンジニア」を評価</h6>
                              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-2">以下の観点で技術レベルを評価しています：</p>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-stone-600 dark:text-stone-400 list-disc list-inside">
                                <li>CSR / SSR / SSGの理解</li>
                                <li>ブラウザレンダリングの理解</li>
                                <li>パフォーマンス最適化経験</li>
                                <li>コンポーネント設計能力</li>
                                <li>状態管理設計</li>
                                <li>API設計との連携理解</li>
                                <li>Web基礎（HTTP / キャッシュ / ブラウザ挙動）</li>
                                <li>フレームワークの理解（Next.jsならAPIのメモ化等）</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-stone-100 dark:border-stone-800/60">
                          <h5 className="text-xs font-bold text-emerald-600 dark:text-emerald-500 mb-2">強み</h5>
                          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                            フロントエンドの設計・パフォーマンス・Web基礎を軸に、コーダーではなく設計ができるエンジニアの見極めを実施。採用の精度向上とチームの技術力向上に貢献しています。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* プロジェクト3: 大型Webアプリの刷新 */}
                <div className="relative group transition-all">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1.5 h-4 w-4 rounded-full border-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950 group-hover:border-amber-600 transition-colors"></span>
                  <div className="p-6 md:p-8 bg-white dark:bg-stone-900/10 border border-stone-200/50 dark:border-stone-800/50 rounded-2xl hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-stone-900 dark:text-white tracking-tight">
                        大型Webアプリの刷新
                      </h4>
                      <span className="text-xs font-bold tracking-wider text-amber-700 dark:text-amber-500 uppercase">
                        2024年6月~2026年2月
                      </span>
                    </div>

                    <div className="text-stone-800 dark:text-stone-200 text-sm leading-relaxed mb-6 space-y-2">
                      <h5 className="font-bold text-stone-900 dark:text-white">プロジェクト概要</h5>
                      <p>現在運用されている大型Webアプリの刷新プロジェクト</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-stone-100 dark:border-stone-800/60">
                      <div className="md:col-span-1 space-y-4">
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">担当工程</h5>
                          <div className="flex flex-wrap gap-1">
                            {["要件定義", "設計", "コーディング", "テスト"].map((tag, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">役割</h5>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">フロントエンド</span>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">使用技術</h5>
                          <div className="flex flex-wrap gap-1">
                            {["TypeScript", "Next.js", "React", "Docker", "AWS"].map((tech, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] font-semibold bg-amber-50 text-amber-900 border border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30 dark:text-amber-400 rounded">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3 space-y-6">
                        <div>
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-2">担当業務</h5>
                          <ul className="list-disc list-inside text-xs text-stone-700 dark:text-stone-300 space-y-1">
                            <li>FEチームの開発に関する基盤や方針の制定</li>
                            <li>FEの設計および実装に従事</li>
                            <li>既存システムの課題を分析し、刷新プロジェクトの技術基盤を整備</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-3">業務内容</h5>
                          <div className="space-y-4 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ 設計 (フロントエンド)</h6>
                              <p className="text-stone-600 dark:text-stone-400 pl-2">既存の要件に基づき、ユーザーインターフェースの再設計を担当。パフォーマンス向上や拡張性を考慮したフロントエンドアーキテクチャを再設計。</p>
                            </div>
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ 実装 (フロントエンド)</h6>
                              <ul className="list-disc list-inside text-stone-600 dark:text-stone-400 pl-2 space-y-1">
                                <li>React, TypeScript, Next.js(App Router)などを活用した機能実装。</li>
                                <li>API連携部分の非同期処理やエラーハンドリングを効率的に構築。</li>
                                <li>パフォーマンス改善を目的としたコードのリファクタリングを実施。</li>
                                <li>レガシーブラウザ対応：Chrome38以上、IOS12.2以上。</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ 開発チームの実装方針やルールの制定</h6>
                              <p className="text-stone-600 dark:text-stone-400 pl-2">コーディングルール、Gitのルール、開発に関するイベントスケジュール、実装方針の制定。</p>
                            </div>
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ AIを利用した効率化</h6>
                              <p className="text-stone-600 dark:text-stone-400 pl-2">現行コードからのリバースエンジニアリングでの設計書作成、設計書からのコードの実装。</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* プロジェクト4: ＋メッセージ 送客・抽選サービス */}
                <div className="relative group transition-all">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1.5 h-4 w-4 rounded-full border-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950 group-hover:border-amber-600 transition-colors"></span>
                  <div className="p-6 md:p-8 bg-white dark:bg-stone-900/10 border border-stone-200/50 dark:border-stone-800/50 rounded-2xl hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-stone-900 dark:text-white tracking-tight">
                        ＋メッセージの 送客サービス、抽選サービスの作成
                      </h4>
                      <span className="text-xs font-bold tracking-wider text-amber-700 dark:text-amber-500 uppercase">
                        2023年4月~2024年5月
                      </span>
                    </div>

                    <div className="text-stone-800 dark:text-stone-200 text-sm leading-relaxed mb-6 space-y-2">
                      <h5 className="font-bold text-stone-900 dark:text-white">プロジェクト概要</h5>
                      <p>＋メッセージの 送客サービス、抽選サービスの作成</p>
                      <p className="text-xs text-stone-500 dark:text-stone-400">※ ＋メッセージとは <a target="_blank" rel="noopener noreferrer" href="https://www.au.com/mobile/service/plus-message/" className="text-amber-700 underline dark:text-amber-500">https://www.au.com/mobile/service/plus-message/</a></p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-stone-100 dark:border-stone-800/60">
                      <div className="md:col-span-1 space-y-4">
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">担当工程</h5>
                          <div className="flex flex-wrap gap-1">
                            {["設計", "コーディング", "テスト", "運用/保守"].map((tag, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">役割</h5>
                          <div className="flex flex-wrap gap-1">
                            {["バックエンド", "フロントエンド"].map((tag, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">使用技術</h5>
                          <div className="flex flex-wrap gap-1">
                            {["TypeScript", "Next.js", "Docker", "Redis", "Fastify", "AWS", "MySQL", "OpenAPI"].map((tech, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] font-semibold bg-amber-50 text-amber-900 border border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30 dark:text-amber-400 rounded">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3 space-y-6">
                        <div>
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-2">担当業務</h5>
                          <ul className="list-disc list-inside text-xs text-stone-700 dark:text-stone-300 space-y-1">
                            <li>開発メンバー</li>
                            <li>BFF（Backend for Frontend）の設計および実装を担当</li>
                            <li>API設計や外部システムとの連携処理を支援</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-3">業務内容</h5>
                          <div className="space-y-4 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ 設計（BFF）</h6>
                              <p className="text-stone-600 dark:text-stone-400 pl-2">フロントエンドからの要求を効率よく処理するためのAPIエンドポイントを設計。抽選機能やメッセージ送客サービスに必要なデータフローと処理フローを定義。</p>
                            </div>
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ 実装（BFF）</h6>
                              <p className="text-stone-600 dark:text-stone-400 pl-2">Node.js, TypeScript、FastifyでBFFを実装。抽選ロジックや送客機能に関するデータ処理APIを実装。</p>
                            </div>
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ 実装（FE）</h6>
                              <p className="text-stone-600 dark:text-stone-400 pl-2">Next.jsを利用したFE実装。</p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-stone-100 dark:border-stone-800/60">
                          <h5 className="text-xs font-bold text-emerald-600 dark:text-emerald-500 mb-1">成果</h5>
                          <p className="text-xs text-stone-700 dark:text-stone-300">リリースされ、実際に運用されている。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* プロジェクト5: 抽選サービスのCMS実装 */}
                <div className="relative group transition-all">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1.5 h-4 w-4 rounded-full border-2 border-stone-200 bg-white dark:border-stone-800/60 dark:bg-stone-950 group-hover:border-amber-600 transition-colors"></span>
                  <div className="p-6 md:p-8 bg-white dark:bg-stone-900/10 border border-stone-200/50 dark:border-stone-800/50 rounded-2xl hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-stone-900 dark:text-white tracking-tight">
                        抽選サービスのCMS実装
                      </h4>
                      <span className="text-xs font-bold tracking-wider text-amber-700 dark:text-amber-500 uppercase">
                        2023年1月〜2023年3月
                      </span>
                    </div>

                    <div className="text-stone-800 dark:text-stone-200 text-sm leading-relaxed mb-6 space-y-2">
                      <h5 className="font-bold text-stone-900 dark:text-white">プロジェクト概要</h5>
                      <p>抽選サービスの管理者や運用者が利用するCMS実装</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-stone-100 dark:border-stone-800/60">
                      <div className="md:col-span-1 space-y-4">
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">担当工程</h5>
                          <div className="flex flex-wrap gap-1">
                            {["設計", "コーディング", "テスト"].map((tag, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">役割</h5>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">フロントエンド</span>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">使用技術</h5>
                          <div className="flex flex-wrap gap-1">
                            {["TypeScript", "React", "Next.js", "Docker"].map((tech, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] font-semibold bg-amber-50 text-amber-900 border border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30 dark:text-amber-400 rounded">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3 space-y-6">
                        <div>
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-2">担当業務</h5>
                          <ul className="list-disc list-inside text-xs text-stone-700 dark:text-stone-300 space-y-1">
                            <li>開発メンバー</li>
                            <li>CMS（コンテンツ管理システム）部分の設計および実装を担当</li>
                            <li>チーム内でフロントエンド領域を中心に担当し、他部門との連携</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-3">業務内容</h5>
                          <div className="space-y-4 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ 設計 (フロントエンド)</h6>
                              <p className="text-stone-600 dark:text-stone-400 pl-2">抽選サービス用CMSの画面構成やコンポーネント設計を担当。サービス特有の要件に対応するため、拡張性を考慮した設計。既存システムとの統合を考慮し、ユーザビリティ向上を目指した構造を策定。</p>
                            </div>
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ 実装 (フロントエンド)</h6>
                              <p className="text-stone-600 dark:text-stone-400 pl-2">React、TypeScript、Next.jsを用いたモジュール開発。動的なコンテンツ更新機能や抽選ロジック管理画面を構築。管理者が使いやすいUIの提供を目的としたエラーハンドリングやバリデーション機能の実装。</p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-stone-100 dark:border-stone-800/60">
                          <h5 className="text-xs font-bold text-emerald-600 dark:text-emerald-500 mb-1">成果</h5>
                          <p className="text-xs text-stone-700 dark:text-stone-300">リリースされ、実際に運用されている。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 会社グループ：サイオステクノロジー株式会社 */}
            <div className="relative">
              <div className="mb-8 flex flex-col md:flex-row md:items-baseline gap-2 pb-3 border-b border-stone-200 dark:border-stone-800">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white flex items-center gap-2">
                  <span className="h-3 w-3 bg-amber-600 rounded-sm"></span>
                  サイオステクノロジー株式会社
                </h3>
              </div>

              <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-4 pl-6 space-y-12 md:pl-8">

                {/* プロジェクト6: 電子カルテ開発 */}
                <div className="relative group transition-all">
                  <span className="absolute -left-[35px] md:-left-[43px] top-1.5 h-4 w-4 rounded-full border-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950 group-hover:border-amber-600 transition-colors"></span>
                  <div className="p-6 md:p-8 bg-white dark:bg-stone-900/10 border border-stone-200/50 dark:border-stone-800/50 rounded-2xl hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-stone-900 dark:text-white tracking-tight">
                        電子カルテ開発
                      </h4>
                      <span className="text-xs font-bold tracking-wider text-amber-700 dark:text-amber-500 uppercase">
                        2020年4月~2022年12月
                      </span>
                    </div>

                    <div className="text-stone-800 dark:text-stone-200 text-sm leading-relaxed mb-6 space-y-2">
                      <h5 className="font-bold text-stone-900 dark:text-white">プロジェクト概要</h5>
                      <p>HL7 FHIRを利用した新規の電子カルテサービス開発プロジェクト</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-stone-100 dark:border-stone-800/60">
                      <div className="md:col-span-1 space-y-4">
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">担当工程</h5>
                          <div className="flex flex-wrap gap-1">
                            {["要件定義", "設計", "コーディング", "テスト"].map((tag, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">役割</h5>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 text-[10px] bg-stone-100 text-stone-600 dark:bg-stone-800/40 dark:text-stone-400 rounded">フロントエンド</span>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1.5">使用技術</h5>
                          <div className="flex flex-wrap gap-1">
                            {["TypeScript", "React", "Docker", "AWS", "Google Cloud Platform", "HTML", "CSS", "Material UI", "Atomic Design", "Figma"].map((tech, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-[10px] font-semibold bg-amber-50 text-amber-900 border border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30 dark:text-amber-400 rounded">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3 space-y-6">
                        <div>
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-2">担当業務</h5>
                          <ul className="list-disc list-inside text-xs text-stone-700 dark:text-stone-300 space-y-1">
                            <li>開発メンバー（1年5ヶ月）</li>
                            <li>6人ぐらいの開発チームのリーダー（1年）</li>
                            <li>開発中旬から参画し、FEの設計、実装、テスト、コードレビューを対応</li>
                            <li>チームメンバーのタスク管理と進捗確認</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-xs font-bold text-stone-900 dark:text-white mb-3">業務内容</h5>
                          <div className="space-y-4 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ 設計 (フロントエンド)</h6>
                              <ul className="list-disc list-inside text-stone-600 dark:text-stone-400 pl-2 space-y-1">
                                <li>ユーザーインターフェースの画面設計や遷移フローの策定。</li>
                                <li>モジュールの設計を行い、再利用性を重視した構造を構築。</li>
                                <li>一部Figmaでデザインを担当。</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ 実装 (フロントエンド)</h6>
                              <p className="text-stone-600 dark:text-stone-400 pl-2">React、TypeScriptを用いたSPAでのフロントエンドの構築。</p>
                            </div>
                            <div>
                              <h6 className="font-bold text-stone-900 dark:text-white mb-1">■ リーダー業務</h6>
                              <ul className="list-disc list-inside text-stone-600 dark:text-stone-400 pl-2 space-y-1">
                                <li>チーム内での知識共有会の企画や実施。</li>
                                <li>メンバー間のコミュニケーション促進とモチベーション管理。</li>
                                <li>プロジェクトの課題分析と改善策の提案、実施。</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-stone-100 dark:border-stone-800/60">
                          <h5 className="text-xs font-bold text-amber-800 dark:text-amber-500 mb-2">実績・取り組み</h5>
                          <ul className="list-disc list-inside text-xs text-stone-700 dark:text-stone-300 space-y-1 mb-4">
                            <li>チームメンバーのスキルセットに応じたタスク割り振りにより、開発効率を向上。</li>
                            <li>コードレビュー体制を整え、品質の担保と新人育成を両立。</li>
                          </ul>

                          <h5 className="text-xs font-bold text-emerald-600 dark:text-emerald-500 mb-1">成果</h5>
                          <p className="text-xs text-stone-700 dark:text-stone-300">新規開発の電子カルテの機能を一部リリース。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

      </main>

      {/* フッター */}
      <footer className="mt-24 border-t border-stone-200/60 dark:border-stone-800/60 py-8 text-center text-xs text-stone-400">
        <p>© 2026 有村 太郎. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
