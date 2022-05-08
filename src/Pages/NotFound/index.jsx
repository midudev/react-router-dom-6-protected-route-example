import React from 'react';
import styles from './notfound.module.css';

const NotFound = () => {
	return (
		<div className={styles.container}>
			<h1>Page not found</h1>
		</div>
	);
}

export default () => <NotFound />;