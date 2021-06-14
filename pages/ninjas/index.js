import React from 'react';
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      ninjas: data,
    }
  }
}

const Ninja = ({ ninjas }) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map(item => (
        <Link href={`/ninjas/${item.id}`} key={item.id}>
          <a className={styles.single}>
            <h3>{item.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Ninja