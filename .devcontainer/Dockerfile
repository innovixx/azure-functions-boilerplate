FROM mcr.microsoft.com/devcontainers/base:jammy

ARG USERNAME=vscode

RUN su ${USERNAME} -c "bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'"
RUN su ${USERNAME} -c "bash -c 'source /home/${USERNAME}/.nvm/nvm.sh && nvm install --lts && nvm use --lts'"
RUN su ${USERNAME} -c "bash -c 'source /home/${USERNAME}/.nvm/nvm.sh && npm install -g pnpm yarn'"

RUN su ${USERNAME} -c "bash -c 'source /home/${USERNAME}/.nvm/nvm.sh && npm i -g azure-functions-core-tools@4 --unsafe-perm true'"