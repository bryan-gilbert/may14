import re
import sys
import argparse
import os.path

sshGroup = 'ssh-access'

programDescription = "Secures SSH from root login and, optionally, user login. \
Run as root user (sudo) if directly modifying the system configuration file."


parser = argparse.ArgumentParser(description=programDescription)
parser.add_argument( "-u", "--userLoginDisable", action='store_true',  help="Disable user logins")
parser.add_argument( "-r", "--replaceEtcSshdConfig", action='store_true',  help="Directly modify the /etc/ssh/sshd_config file")
parser.add_argument( "-s", "--sourceFile",  help="path to source file")
parser.add_argument( "-o", "--outputFile",  help="path to output file")
# parser.add_argument( "-g", "--group",  help="Restrict ssh access to users who are members of the group")

args = parser.parse_args()


sourceFile = "sampleData/sshd_config"
outputFile = "sshd_config.tmp"

if not args.sourceFile is None:
     sourceFile = args.sourceFile

if args.replaceEtcSshdConfig:
    sourceFile = '/etc/ssh/sshd_config'

if not os.path.isfile(sourceFile):
    print("Can not locate source file " + sourceFile)
    sys.exit(2)


if not args.outputFile is None:
     outputFile = args.outputFile

if args.replaceEtcSshdConfig:
    outputFile = '/etc/ssh/sshd_config'

print("Source file: " + sourceFile)
print("Output file: " + outputFile)


f = open(sourceFile,'r')
data = f.read()
f.close()

print("Will disable root login")
data = re.sub("([#\s]*PermitRootLogin.*$)","PermitRootLogin No",data)


print("Will restrict ssh login to users who are members of group: " + sshGroup)
if "AllowGroups" in data:
    data = re.sub("([#\s]*AllowGroups.*$)","AllowGroups "+ sshGroup, data)
else:
    data = data + "\n" + "AllowGroups "+ sshGroup


if args.userLoginDisable:
    print("Will disable user login")
    data = re.sub("([#\s]*PasswordAuthentication.*$)","PasswordAuthentication No",data)
    data = re.sub("([#\s]*ChallengeResponseAuthentication.*$)","ChallengeResponseAuthentication No",data)

f = open(outputFile, 'w')
f.write(data)
f.close()

NL = "\n"
d = "" + NL
d += "# Some other commands that may be useful..." + NL
d += "sudo service ssh restart" + NL
d += "ssh-keygen -b 4096" + NL

print(d)


