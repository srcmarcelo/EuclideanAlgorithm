import React, { useState } from 'react';
import { List, Button } from 'antd';
import styles from '../../styles/Euclides.module.css';

export default function Euclides() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [showCalc, setShowCalc] = useState(false);
  const [metods, setMetods] = useState<Array<String> | undefined>([]);

  const metod: Array<String> = [];

  const Calculate = (a: number, b: number) => {
    if (a === 0 || b === 0) {
      metod.push('Coloque valores positivos!');
      setMetods(metod);
      setShowCalc(true);
      return;
    }
    metod.push(`Vamos lá! mdc(${a}, ${b})`);
    let temp = 0;
    do {
      if (a < b) {
        temp = a;
        a = b;
        b = temp;
        metod.push(`Trocando os valores: mdc(${a}, ${b})`);
      }
      temp = a % b;
      metod.push(`${a} % ${b} = ${temp} --> mdc(${temp}, ${b})`);
      a = temp;
    } while (a != 0);
    metod.push(`RESULTADO = ${b}`);
    console.log(metod)
    setMetods(metod);
    setShowCalc(true);
  };

  return (
    <div className={styles.content}>
      <div className={styles.control}>
        <h1 className={styles.title}>{'mdc(a, b) = ?'}</h1>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <span>Valor de a:</span>{' '}
            <input
              type='number'
              name='ainput'
              id='ainput'
              min={0}
              onChange={(e) => setA(parseInt(e.target.value))}
            />
          </div>
          <div className={styles.input}>
            <span>Valor de b:</span>{' '}
            <input
              type='number'
              name='binput'
              id='binput'
              min={0}
              onChange={(e) => setB(parseInt(e.target.value))}
            />
          </div>
        </div>
        <Button
          onClick={() => {
            setShowCalc(!showCalc);
            Calculate(a, b);
          }}
        >
          Calcular
        </Button>
      </div>
      <div className={styles.calc}>
        {showCalc && (
          <List
            dataSource={metods}
            renderItem={(value) => {
              return <List.Item>{<p>{value}</p>}</List.Item>;
            }}
          />
        )}
      </div>
    </div>
  );
}
