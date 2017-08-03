package org.komunumo.web

import kotlinx.html.*
import react.*
import react.dom.*
import kotlin.browser.*

fun main(args: Array<String>) {
    runtime.wrappers.require("jug-ch.css")

    ReactDOM.render(document.getElementById("content")) {
        div {
            Application {}
        }
    }
}

class Application : ReactDOMComponent<ReactComponentNoProps, ApplicationPageState>() {
    companion object : ReactComponentSpec<Application, ReactComponentNoProps, ApplicationPageState>
    init {
        state = ApplicationPageState(MainView.Home)
    }

    override fun ReactDOMBuilder.render() {
        div("h1") {
            + "komunumo"
        }
    }
}

enum class MainView {
    Home
}

class ApplicationPageState(var selected: MainView) : RState