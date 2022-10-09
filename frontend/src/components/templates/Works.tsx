import { FC } from 'react'
import Typography from '../atoms/Typography'
import ModalContent from '../organisms/ModalContent'
import Work from '../organisms/Work'
import style from './Works.module.scss'

const Works: FC = () => {
    return (
        <section className={style.works} id="works">
            <div className={style.title}>
                <Typography fontStyle="title3" component="h2">
                    制作物
                </Typography>
            </div>
            <div className={style.contents}>
                <Work title="スタバのトッピング計算" src="/starbacks.png">
                    <ModalContent
                        title="スタバのトッピング計算"
                        techs={[
                            'NEXT.js',
                            'TypeScript',
                            'MongoDB',
                            'MUI',
                            'Recoil',
                            'Render.com',
                        ]}
                        url="https://starbucks-topping-calc.onrender.com"
                        overview={
                            <ul>
                                <li>
                                    <Typography>
                                        スターバックスのトッピングを選ぶと、価格の算出、疑似的な明細の作成をします。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        各商品にどのトッピングができるかできないかの情報が設定されています。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        サイト内に管理画面を用意しており、ここでデータベースへの追加、編集、削除を行います。
                                    </Typography>
                                </li>
                            </ul>
                        }
                        theme={
                            <ul>
                                <li>
                                    <Typography>
                                        初回レンダリングが遅い。対応として「ダイナミックインポートを取り入れる」「SSGからSSRへ変更」その他パフォーマンスチューニングを行うが、解決せず。
                                        <br />
                                        現状の仮説としては「MUIによる負担」「データ構造に改善余地がある」と考えている。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        当初はMaterial
                                        Designをテーマに作成していたが、途中から「MUIでいいのでは」という結論に至る。
                                        <br />
                                        結果、考えられる初期表示速度の遅さの要因の1つとなった。
                                    </Typography>
                                </li>
                            </ul>
                        }
                        study={
                            <ul>
                                <li>
                                    <Typography>
                                        SSG、SSR、ISRの理解が深まった。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        mongooseを使った、クライアントサイドとMongoDBとのやりとり。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        データ構造の設計の重要性。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        アトミックデザインを取り入れたが、コンポーネント管理がきれいにならなかった。アトミックデザインに「向くプロジェクト」と「向かないプロジェクト」があることを学んだ。
                                    </Typography>
                                </li>
                            </ul>
                        }
                    />
                </Work>
                <Work title="jamstackブログデモ" src="/blog.png">
                    <ModalContent
                        title="jamstackブログデモ"
                        techs={['NEXT.js', 'TypeScript', 'MUI', 'microCMS']}
                        url="https://starbucks-topping-calc.onrender.com"
                        overview={
                            <ul>
                                <li>
                                    <Typography>
                                        自身のアウトプット用に制作したブログサイト。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        NEXT.jsとmicroCMSを使ったjamstackブログ。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        デザインはWordPressテーマ「THE・THOR」を参考に作成。
                                    </Typography>
                                </li>
                            </ul>
                        }
                        theme={
                            <ul>
                                <li>
                                    <Typography>
                                        ブログを作ったはいいが、現状プログラミング学習に手一杯で記事の投稿ができていない。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        カテゴリーメニューなど、サイドバーに追加すべきものが多くある
                                    </Typography>
                                </li>
                            </ul>
                        }
                        study={
                            <ul>
                                <li>
                                    <Typography>
                                        余白のとりかたなど、デザイン面で得るものが大きかった。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        jamstackの概念が学べた。
                                    </Typography>
                                </li>
                            </ul>
                        }
                    />
                </Work>
                <Work title="ドルコスト平均法計算サイト" src="/dca-calc.png">
                    <ModalContent
                        title="ドルコスト平均法計算サイト"
                        techs={[
                            'NEXT.js',
                            'TypeScript',
                            'Sass',
                            'chart.js',
                            'Redux',
                        ]}
                        url="https://starbucks-topping-calc.onrender.com"
                        overview={
                            <ul>
                                <li>
                                    <Typography>
                                        資産運用の手法の1つである、ドルコスト平均法の計算をおこなう。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        フォームに運用期間、月の入金額、年利回りを入力すると、計算結果をグラフで表示する。
                                    </Typography>
                                </li>
                            </ul>
                        }
                        theme={
                            <Typography>
                                初めて公開したサイトのためHTMLをはじめ、あらゆる部分に改善余地がある。
                            </Typography>
                        }
                        study={
                            <ul>
                                <li>
                                    <Typography>
                                        使用技術全般の基礎。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        ライブラリの使用方法。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        デプロイの経験ができた。
                                    </Typography>
                                </li>
                            </ul>
                        }
                    />
                </Work>
                <Work title="ポートフォリオサイト" src="/portfolio.png">
                    <ModalContent
                        title="ポートフォリオサイト"
                        techs={[
                            'React',
                            'TypeScript',
                            'Node.js',
                            'Express',
                            'Dart Sass',
                        ]}
                        url="https://starbucks-topping-calc.onrender.com"
                        overview={
                            <ul>
                                <li>
                                    <Typography>
                                        これまでの制作物をまとめたポートフォリオサイト。
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        テーマはシンプル。余計なものを入れず、すぐに制作物のセクションがみられるようにした。
                                    </Typography>
                                </li>
                            </ul>
                        }
                        theme={
                            <Typography>
                                技術の幅が広がりしだい、機能を追加していきたい。
                            </Typography>
                        }
                        study={<Typography>Dart Sassの使いかた。</Typography>}
                    />
                </Work>
            </div>
        </section>
    )
}

export default Works
