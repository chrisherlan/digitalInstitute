import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Signin from './Signin';


export default function Home() {
  return (
    <div>    
      <Signin />
    </div>
  )
}
