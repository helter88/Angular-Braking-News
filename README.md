# Breaking News information platform

<img src="./readme_images/breaking-news-main.png" alt="project image">
> This applicattion is an information platform

> API Requests from the browser are not allowed on the Developer plan, except from localhost so check app you have to run it localy on your computer.

## Description

The purpose of application is to fetch the newest news and displaying them. The application contains two filters:

- Country: Poland, Czech Republic, Germany (default Poland)
- Results on page (pageSize)- range between 0 – 100 (default 10)

The filter results which client choosen should be saved by localStorage. There should be displayed titile: ” Wyświetlono [pageSize] najnowszych wiadomości dla kraju: [country]”
over the list of news.
News should be presented in two columns, in a card format which contain:

- title
- date in format (dd.mm.yyyy)
- description with a maximum of 60 characters. If the description from API is longer than 60 characters, it should be cut and ended with ”…”

Each card should contain a link to the news, which will open in a new window after clicking it.
The aplication written in Polish. Styling should be done in SCSS without without UI ready-made frameworksl .

## How to run app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Features

- Page with articles list
- Country filter to choose articles from Poland, Czech Republic and Germany
- Articles per site filter
- Saving chosen filters data in Local Storage
- Clickable article card
- Paginator to choose next or previous articles list

## Built using

- Angular 15.1.1
- Typescript 4.8.4
- RxJS 7.5.7
- SCSS
- [News API](https://newsapi.org/docs/endpoints/top-headlines "click to visit API website")
