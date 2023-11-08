import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img className={styles.featureSvg} src={require('@site/static/img/frontend_develop.jpeg').default} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">{'フロントエンド開発'}</Heading>
              <p>
                主にSPAでのフロントエンド開発者。
              </p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img className={styles.featureSvg} src={require('@site/static/img/musical_instrument.png').default} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">{'楽器'}</Heading>
              <p>
                <p>バイオリンは主にクラシックをメインで５年目。<br></br>先生に師事して２年目。</p>
                <p>ギターは1年目。</p>
              </p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img className={styles.featureSvg} src={require('@site/static/img/plastic_model.jpeg').default} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">{'プラモデル作成'}</Heading>
              <p>
                <p>主にタミヤのスケールモデルがメイン。</p>
                <p>ガンプラはたまに作る。</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
