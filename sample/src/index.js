import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'

window.React = React


render(
	<App/>, 
	document.getElementById('react-container')
)



/*render(
<SkiDayList days={
	[
		{
			resort: "Squaw Valley",
			date: new Date("1/2/2016"),
			powder: true,
			backcountry: false		},
		{
			resort: "Kirkwood",
			date: new Date("3/28/2016"),
			powder: false,
			backcountry: false
    },
    		{
		resort: "Mt. Tallac",
				date: new Date("4/2/2016"),
				powder: false,
			backcountry: true
		}
	]
}/>,
  document.getElementById('react-container')
)*/