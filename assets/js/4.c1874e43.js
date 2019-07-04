(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{165:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAtdJREFUOBGVlU1sTFEUx//vzbTTllELo9JYSBG1UbGR+G5ZCBKxEIRMRNPpTkKFTauviaYhIRERHw2KSpEmFkisWiK1IyERJCyLMZEQQqcfb/zum7wxb8wkNZP77r3n/M//nXPuPedZKvVzNBvVMoXUpIz2McKy1adfGlZEL+XoWzFT6x+ho5mYHsC4BZKlcpWWpS8eLqO5yMvZv0Xeq0ldhfhnPkeQsF0LVQnQ1npN4UlGt5hHNKaUKthNKoZ3a9DvZTQieYzHCZ3QB5/0L6GjRSrTPRQ1+NSmz7qty5rwgYE5AXKedkN+GnkS1A48fW8wWUITZkgPGPUa1xaULwIEpTYdalCVHuH5OyLZZsK3PaylZvK2jje1TZvM0Wb8rMCBg56tTd752TqmagQJyIY0qrulnAnIu7QRy7PEN0OdGsS7Ifathsuc2XKSW8+4WTJn+Wzd4Msgs4mlAyJhKWwFR6UabJTmnqUBPMu3K7p2VIdXV/DovNo1kMNksDUcITXaLOKAkoBSHqBdi3n3ghzYXzica0TXwA3i2QVf7M3G1nC4iptDcQPKsNbypj4dVTQnN+uwLoJ8DVlPTl64sBSyCfUGXtZAEvP0X7nM0ifN0nFv70AVJcQMxxbVoUIOb29sDYd03SaEYdyNMFZ5ynPkYkxHWG9Sl/Yw96CbA66FC5L2MIUPF1vDwU0JaSVFHtF2MHXUyoCeE9hT/aD4PuJbL8AKRhx/szkuJDNVU61TRJqmDLttndR3KC4RcpPma2cO36n7hNHKvpkTHc3JCxe12JibMgUHXMHSC2sJ79n6H9Wyguge5pde8eYwocMEfKfkRTdh1moXzzOkI0n5FTQHPwzTvqqgsbTBOyxX/axHWKc4KIt/DP1q8pVtX66e6DeHVbR9+aTBBltPfschSqK2yKlpsOZGvEE+jQbrk5rZfAKmaE/lNFJX+yGZZPQjM/X7Cn3RT8AfwjnZAnbGflYAAAAASUVORK5CYII="},175:function(e,t,s){"use strict";s.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"stage-2-debian-server-with-nginx-in-docker-npm-node-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stage-2-debian-server-with-nginx-in-docker-npm-node-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" Stage 2 - Debian Server with Nginx in Docker, NPM, Node, Vue")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"workshop-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workshop-instructions","aria-hidden":"true"}},[this._v("#")]),this._v(" Workshop Instructions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("git checkout -b stage2\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[r("img",{attrs:{src:s(165),alt:"checked",title:"checked"}}),e._v(" Production quality web server. Responsive. Ready for micro-services.")]),e._v(" "),r("li",[r("img",{attrs:{src:s(165),alt:"checked",title:"checked"}}),e._v(" Web server restarts after reboot")]),e._v(" "),r("li",[r("img",{attrs:{src:s(165),alt:"checked",title:"checked"}}),e._v(" Web server docker-ized")]),e._v(" "),r("li",[r("img",{attrs:{src:s(165),alt:"checked",title:"checked"}}),e._v(" Vue web site with hot-swapping development environment")]),e._v(" "),r("li",[r("img",{attrs:{src:s(165),alt:"checked",title:"checked"}}),e._v(' For "prod" you can run exactly the same system on your development box that will run on the production server.')]),e._v(" "),r("li",[r("img",{attrs:{src:s(165),alt:"checked",title:"checked"}}),e._v(" Docker compose provides")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"workshop-instructions-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workshop-instructions-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Workshop Instructions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"install-docker-on-debian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-docker-on-debian","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Docker on Debian")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"set-up-the-debian-repository-for-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-the-debian-repository-for-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Set up the debian repository for docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('sudo apt-get update\n \nsudo apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common\n\ncurl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -\n\nsudo apt-key fingerprint 0EBFCD88\n# verify the finger print is 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88\n\n# get the stable version \nsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"install-docker-ce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-docker-ce","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Docker-CE")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("sudo apt-get update\n\nsudo apt-get install -y docker-ce docker-ce-cli containerd.io\n\n# verify all is well ...\nsudo docker run hello-world\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"install-docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-docker-compose","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Docker-Compose")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n\nsudo chmod +x /usr/local/bin/docker-compose\n\nsudo docker-compose --version\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"install-npm-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-npm-node","aria-hidden":"true"}},[this._v("#")]),this._v(" Install NPM, Node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -\n\nsudo apt-get install -y nodejs\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"sample-web-site"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-web-site","aria-hidden":"true"}},[this._v("#")]),this._v(" Sample web site")])}],a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._m(3),e._v(" "),s("p",[e._v("The following steps, after practice, take about 10 minutes to complete with a reasonable internet connection.")]),e._v(" "),s("p",[e._v("Prerequisite: you have a secure server setup as described in Stage 1")]),e._v(" "),s("p",[e._v("Objective: We will have a web server, that will server a sample web site. Both will be production ready and have a great developer experience.")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Very few files contribute to this stage.  We need a very simple Docker file to set up nginx and a docker-compose file to join the nginx\nwith the static web site.  Plus we set up our vue directory.  Note that we don't install nginx on our server.  By placing nginx in a container\nwe can run the same container, with exactly the same configuration, on both our development box and any server we wish.")]),e._v(" "),s("p",[e._v("Why Debian?  We can just as easily use Ubuntu for our demonstrations because Ubuntu is a fork of Debian.  Your choice when\nyou extend your application.  I've chosen Debian because the work can easily port to Ubuntu if needed and Debian is known\nto the more stable and secure. "),s("a",{attrs:{href:"https://www.ubuntupit.com/debian-vs-ubuntu-top-15-things-to-know-before-choosing-the-best-one/",target:"_blank",rel:"noopener noreferrer"}},[e._v("see point 11"),s("OutboundLink")],1),e._v("\nRedHat's OS is also fine.")]),e._v(" "),s("p",[e._v("We're using nginx for our web server because it is by far the best choice for our application architecture that is comprised\nof static web resources complimented by API calls supported by a backend database.")]),e._v(" "),s("p",[e._v("We start by setting up the server with Docker, npm and node.js.")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("Log onto your server with the new (sudo-capable) user and follow the sections below.")]),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("For complete details see the "),s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/debian/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),s("p",[e._v("For complete details see the "),s("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs"),s("OutboundLink")],1),e._v("\nThe docs show how to install docker-compose on Mac, Windows, Linus, etc.")]),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),s("p",[e._v("Go to the next part and set up the sample web site. Next: "),s("router-link",{attrs:{to:"./2.client.html"}},[e._v("client")])],1)])},r,!1,null,null,null);t.default=n.exports}}]);