# Stage 1 - Secure production server

> To deliver an application you need a secure server

You will be hacked. All the time.  Every server is under constant attack.  They are
looking to steal data and often of more value to the hacker, they want your computational resources. They want your machine
to stage attacks on other servers.

Yet you want to focus on developing your application.  This stage 1 recipe will solve 95% of your problems.  Yet, if your
application is going to contain valuable information you're going to need to go beyond this recipe. You should hire an expert.
What we have here is a recipe suitable for most small scale applications.  We'll set up our server in a way that makes
it difficult for the hacker. We'll have a system that is harder to hack than the value they will get.

Secure server
1. ![checked] No SSH access via password (public key cryptography only)
2. ![checked] No root user SSH access
3. ![checked] SSH access via non-standard port
4. ![checked] User account with user name that is unique and difficult to quess
5. ![checked] User has sudo privileges
6. ![checked] Firewall blocks all ports except 80 and 443 (and custom ssh)


[checked]: ../images/checked-20.png "checked"
[unchecked]: ../images/unchecked-20.png "unchecked"
