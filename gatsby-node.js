const talkPages = require('./src/data/pages/talks.json')
const path = require('path')

exports.createPages = ({ actions }) => {
    console.log('Creating talk pages')
    createTalkPages(actions)
    console.log('Creating talk page')
    createTalkPage(actions)
}


const createTalkPages = function (actions)
{
    const { createPage } = actions
    const template = path.resolve('./src/templates/talk.js')

    talkPages.items.forEach(talkPage => {
        let pagePath = talkPage.slug
        console.log('Creating page ' + pagePath)
        createPage({
            path: pagePath,
            component: template,
            context: talkPage
        })
    })
}

const createTalkPage = function (actions)
{
    const { createPage } = actions
    const template = path.resolve('./src/templates/talks.js')

    let pagePath = '/talks/'
    console.log('Creating page ' + pagePath)
    createPage({
        path: pagePath,
        component: template,
        context: talkPages
    })
}