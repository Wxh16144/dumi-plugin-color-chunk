# --platform linux/amd64
FROM cypress/included:cypress-13.17.0-node-22.13.0-chrome-131.0.6778.264-1-ff-134.0-edge-131.0.2903.112-1

COPY . /opt/app
WORKDIR /opt/app

RUN /bin/rm -rf /opt/app/cypress-image-diff
# 挂载 volume (cypress-image-diff)
VOLUME /opt/app/cypress-image-diff

#  是否使用国内镜像
ARG CHINA_MIRROR=true
# ARG CHROME_VERSION=stable
ARG CHROME_VERSION=131.0.6778.264

# 设置 npm 镜像
RUN if [ "$CHINA_MIRROR" = "true" ]; then \
      npm config set registry https://registry.npmmirror.com/; \
      # cypress
      export CYPRESS_DOWNLOAD_MIRROR=hhttps://cdn.npmmirror.com/binaries/cypress/; \
      # https://zhuanlan.zhihu.com/p/637107614
      # puppeteer<=19
      export PUPPETEER_DOWNLOAD_HOST=https://cdn.npmmirror.com/binaries/; \
      # puppeteer>20.1+
      export PUPPETEER_DOWNLOAD_BASE_URL=https://cdn.npmmirror.com/binaries/chrome-for-testing/; \
    fi

RUN npm install -g pnpm@8.15.8 && \
    pnpm install && \
    npx cypress install

RUN INSTALL_OUTPUT=$(npx @puppeteer/browsers install chrome@${CHROME_VERSION} --path /tmp/chrome-for-testing) && \
DOWNLOAD_DIR=$(echo "$INSTALL_OUTPUT" | grep -o '\/.*\/chrome-linux64') && \
mv $DOWNLOAD_DIR /opt/chrome-for-testing

RUN ln -fs /opt/chrome-for-testing/chrome /usr/local/bin/chrome
RUN rm -rf /tmp/chrome-for-testing
