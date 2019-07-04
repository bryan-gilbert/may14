(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{172:function(e,t,s){"use strict";s.r(t);var n=s(0),r=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("blockquote",[s("p",[e._v('"the continuous increase in security requirements could very well render\nECDSA the de-facto solution in the future." '),s("a",{attrs:{href:"https://www.ssl.com/article/comparing-ecdsa-vs-rsa/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Comparing ECDSA vs RSA"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("Also take a read of "),s("a",{attrs:{href:"https://blog.cloudflare.com/ecdsa-the-digital-signature-algorithm-of-a-better-internet/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECDSA"),s("OutboundLink")],1)]),e._v(" "),e._m(4),s("p",[e._v("The above is a good enough key for our sample application. Consider increasing the key length if your application or server\nresources become more valuable to hackers.  Also consider using a different password/passphrase for your SSH key than\nyou later use for the user on the server who can get root access.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("Do log onto the new server via ssh.")]),e._v(" "),e._m(14),s("p",[e._v("The server has been configured to accept ssh from someone with the private key file we will use for the workshop.")]),e._v(" "),e._m(15),e._v(" "),s("p",[e._v("If you want to really build your own app server then modify the following environment variables.\n(Below are some instructions for generating user passwords.)\nFor the workshop use the following.\nCopy paste the following into the root ssh session you have open on the server.")]),e._v(" "),e._m(16),s("p",[e._v("Return to your development machine and open another terminal session and test logging on as as the new (sudo-capable) user.")]),e._v(" "),e._m(17),e._v(" "),e._m(18),s("p",[e._v("(recall SERVER was setup above. It is the IP address of your server)")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._m(25),e._v(" "),e._m(26),s("p",[e._v("export PORT=8201\ncp /etc/ssh/sshd_config /etc/ssh/sshd_config.BAK\necho '*************** Secure sshd_config ******************'\nsed -i 's/PermitRootLogin yes/PermitRootLogin no/g' /etc/ssh/sshd_config\nsed -i \"s/#Port 22/Port $PORT/g\" /etc/ssh/sshd_config\nsed -i 's/ClientAliveInterval 120/ClientAliveInterval 600/g' /etc/ssh/sshd_config\nsed -i '$ a ClientAliveCountMax 3' /etc/ssh/sshd_config\nsed -i '$ a AllowGroups ssh-access' /etc/ssh/sshd_config\ndiff --color=always /etc/ssh/sshd_config.BAK /etc/ssh/sshd_config")]),e._v(" "),e._m(27),e._m(28),e._v(" "),e._m(29),s("p",[e._v("Then set up the firewall.  Allow the port you set for ssh above")]),e._v(" "),e._m(30),s("p",[e._v("Should report:")]),e._v(" "),e._m(31),s("p",[e._v("Next time you log in don't forget the ssh port has changed")]),e._v(" "),e._m(32),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),s("p",[e._v("Or instead of a cryptic password you may consider a passphrases "),s("a",{attrs:{href:"https://security.stackexchange.com/questions/178015/passphrase-vs-password-entropy",target:"_blank",rel:"noopener noreferrer"}},[e._v("with caution"),s("OutboundLink")],1),e._v("\nMake your choice based on")]),e._v(" "),e._m(36)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"server-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Server setup")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-generate-a-ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-generate-a-ssh-key","aria-hidden":"true"}},[this._v("#")]),this._v(" How to generate a SSH Key")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Skip this step during the workshop. You will be given the key pair.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("On your development box use "),t("code",[this._v("ssh-keygen")]),this._v(" from "),t("code",[this._v("openssh")]),this._v(" to generate a public private key.  KF is the name\nwe'll give to our key files.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("export KF=may14-ecdsa\n# Generate key, enter a password or passphrase when prompted\nssh-keygen -t ecdsa -b 256 -f $KF\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"place-your-private-public-key-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#place-your-private-public-key-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Place your private public key files")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("During the workshop you will be given the key files: may14-ecdsa and may14-ecdsa.pub")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Link or copy the private and public key files into the default key folder. The following is for a linux/mac user."),t("br"),this._v("\nKF is set to match the root name of the key files.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("export KF=may14-ecdsa\nln -s $KF ~/.ssh/$KF\nln -s $KF.pub ~/.ssh/$KF.pub\nls -al ~/.ssh\n\n# register ssh key in your local environment, enter passphrase when prompted\nssh-add $KF\n\n# When you need to copy and past the public key just cat the contents\ncat $KF.pub\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"digital-ocean-server-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#digital-ocean-server-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Digital Ocean server setup")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Skip this step during the workshop. You will be given the IP address of a server")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Log onto DO")]),this._v(" "),t("li",[this._v("create a droplet; (e.g. Debian, 1GB ($5/mth) Toronto or San Fran)")]),this._v(" "),t("li",[this._v("add ssh key (see above)")]),this._v(" "),t("li",[this._v("name your new droplet")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"first-log-on"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#first-log-on","aria-hidden":"true"}},[this._v("#")]),this._v(" First log on")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("On you development machine ssh onto your server.  Set SERVER = ip address of your server")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("export SERVER=159.89.117.81\nssh root@$SERVER\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prepare-the-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-system","aria-hidden":"true"}},[this._v("#")]),this._v(" Prepare the system.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# export PKS='replace with the contents of the public key file on your development box'\nexport PKS='ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBIrLLdQGnMofGqBWFnapwWORcxM4lU64bBmkVqWjq2VzrrBKzAhKgSSUzwOpRNV2yqusT46M+iMWt9rx1d9keEA='\nexport UN=may14\nexport UH=/home/$UN\nexport PW=YzFmYWEw\n\necho adding a favorite alias\nalias ll='ls -lahG'\n\necho Set timezone\ntimedatectl set-timezone America/Vancouver\n\necho DigitalOcean recommends next line. See https://www.digitalocean.com/community/questions/debian-9-3-droplet-issues-with-useradd\napt-get remove -y unscd\n\necho Update system\napt-get update & apt-get -y upgrade\n\necho Installing essentials\napt-get install -y sudo curl git-core\n\naddgroup ssh-access\n\necho Create user: $UN\n# Create the user; add to group; create home directory (-m); set password hashed\n# useradd -G users,sudo,www-data,ssh-access -m -s /bin/bash -p $(echo $PW | openssl passwd -1 -stdin) $UN\nuseradd -G users,sudo,ssh-access -m -s /bin/bash -p $(echo $PW | openssl passwd -1 -stdin) $UN\n\necho Stash favourite alias in shell init for user\necho \"alias ll='ls -lahG'\" >> $UH/.bashrc \n\necho User created to remove the user created run \necho   deluser $UN\n\necho Show information about the user: \ngetent passwd $UN\nid -Gn $UN\n\necho Placing SSH keys into users home directory  \nmkdir -p $UH/.ssh\n\necho $PKS >> $UH/.ssh/authorized_keys\ncat $UH/.ssh/authorized_keys\n\nchmod 700 $UH/.ssh\nchmod 600 $UH/.ssh/*\nchown -R $UN:$UN $UH/.ssh\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("On your development workstation:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("echo Log into server $SERVER as user \nssh may14@$SERVER\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("On the server check that user can use "),t("code",[this._v("sudo")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# on the server you are now the new user. Test sudo\nsudo su\n# enter the user password to become sudoer\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"securing-ssh-access-to-the-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#securing-ssh-access-to-the-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Securing ssh access to the server")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("At this point you have a new server with a new user which can log on and run sudo commands."),t("br"),this._v("\nLet's secure the access via ssh")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("change the ssh port to 8201 (choose a different port as you wish)")]),this._v(" "),t("li",[this._v("disable password log on")]),this._v(" "),t("li",[this._v("disable root ssh access")]),this._v(" "),t("li",[this._v("allow users in the ssh-access group to ssh onto the machine")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# on the server - secure ssh\n\n# you are the new user.. right?\nwhoami\n\ncd /etc/ssh\n# backup and remove the existing file ssh config file\nsudo mv sshd_config sshd_config.bak\n# create a new file\nsudo nano sshd_config \n# Copy the text in the copy of sshd_config here in the deploy folder\n# Paste into the server side. If prompted by nano paste with control characters.\n# Save file\nsudo diff sshd_config.bak sshd_config\n# Check the differences with the following\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("OR instead of the above directly edit "),t("code",[this._v("/etc/ssh/sshd_config")]),this._v(" and add or change the following:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Port 8201 \nPermitRootLogin no\nPasswordAuthentication no\nAllowGroups ssh-access\n# very optional for the workshop ... add this to avoid problem with multiple sshd processes\nClientAliveInterval 600\nClientAliveCountMax 3\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# Restart the ssh service:\nsudo service ssh restart\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"firewall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firewall","aria-hidden":"true"}},[this._v("#")]),this._v(" Firewall")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("sudo apt-get install -y ufw\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("sudo ufw default deny incoming\nsudo ufw default allow outgoing\n\n# open ssh port\nsudo ufw allow 8201/tcp\nsudo ufw deny ssh\n\n# open http port\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\n\n# open ntp port : to sync the clock of your machine\nsudo ufw allow 123/udp\n\n# turn on firewall\nsudo ufw enable\n\n# check the status\nsudo ufw status\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Status: active\n\nTo                         Action      From\n--                         ------      ----\n8201/tcp                   ALLOW       Anywhere                  \n22/tcp                     DENY        Anywhere                  \n80/tcp                     ALLOW       Anywhere                  \n443/tcp                    ALLOW       Anywhere                  \n123/udp                    ALLOW       Anywhere                  \n8201/tcp (v6)              ALLOW       Anywhere (v6)             \n22/tcp (v6)                DENY        Anywhere (v6)             \n80/tcp (v6)                ALLOW       Anywhere (v6)             \n443/tcp (v6)               ALLOW       Anywhere (v6)             \n123/udp (v6)               ALLOW       Anywhere (v6)\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("ssh may14@159.203.14.23 -p 8201 \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"a-way-to-generate-strong-passwords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-way-to-generate-strong-passwords","aria-hidden":"true"}},[this._v("#")]),this._v(" A way to generate strong passwords")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Even though we will block password SSH you will still need a good password for your sudo user. ("),t("code",[this._v("sudo user")]),this._v(" means a use that\nbecome "),t("code",[this._v("root")]),this._v(" and run root commands). You can use the following to generate a reasonable password for a new user. This script\nmight also be useful to generate a series of user accounts with difficult to hack passwords. Change the length from 8 to something\nmore secure, like 15, if desired.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# generate random password for user\nPW=$(date +%s|sha256sum|base64|head -c 8)\necho ------------------ SAVE THIS: $PW\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("the value of your data")]),this._v(" "),t("li",[this._v("remember that you'll need to type in the password everytime you log onto your server and run sudo")])])}],!1,null,null,null);t.default=r.exports}}]);