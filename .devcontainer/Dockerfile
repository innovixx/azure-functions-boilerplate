ARG VARIANT=14
FROM mcr.microsoft.com/azure-functions/node:4-node16-core-tools

ARG EXTRA_NODE_VERSION=16.13.0
RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"