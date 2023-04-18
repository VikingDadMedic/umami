import Head from 'next/head';
import useLocale from 'hooks/useLocale';
import styles from './LoginLayout.module.css';

export default function LoginLayout ( { children } )
{
  const { dir } = useLocale();

  return (
    <div className={ styles.layout } dir={ dir }>
      <Head>
        <title>{ `Login | vsAdmin` }</title>
      </Head>
      { children }
    </div>
  );
}
