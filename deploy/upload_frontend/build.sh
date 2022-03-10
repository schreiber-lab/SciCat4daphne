echo "running build script inside node container"
cd /home/node/app
npm --dd install
npm --dd run-script build