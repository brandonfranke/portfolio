import { useState, useEffect } from "react"

import Recent 		from '../../components/sections/articles/recent'

import Color 	from '../../components/utils/page.colors.util'

import colors 		from '../../content/articles/_colors.json'
import settings 	from '../../content/_settings.json'

//
export default function Articles({ devToArticles }) {
	return (
		<>
			<Color colors={colors} />
			<Recent devToArticles={devToArticles}/>
		</>
	)
}

// This gets called on every request
export async function getServerSideProps({ res }) {

	const devToArticles = await fetch(`https://dev.to/api/articles?username=${settings.username.devto}`).then(response => response.json());

	return { props: { devToArticles } }
}