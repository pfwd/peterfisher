const talkPages = require('./src/data/pages/talks.json')
const path = require('path')

exports.createPages = ({ actions }) => {
    createTalkPages(actions)
    createTalkPage(actions)
}


const createTalkPages = function (actions)
{
    const { createPage } = actions
    const template = path.resolve('./src/templates/talk.js')

    talkPages.items.forEach(talkPage => {
        let pagePath = talkPage.slug
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
    createPage({
        path: pagePath,
        component: template,
        context: talkPages
    })
}