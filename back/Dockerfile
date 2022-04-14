FROM node:14.15-alpine
# FROM node:alpine

WORKDIR /app

ENV NODE_ENV dev

COPY package.json ./
COPY package-lock.json ./
RUN npm i

COPY .babelrc ./
COPY dist ./dist
# COPY public ./public
COPY src ./
COPY tsconfig.json ./
COPY .eslintrc.json ./

ENV APP_NAME timeline:server
ENV DEBUG timeline:*
ENV LOG_LEVEL info
# ENV MONGO_URI mongodb://mongo/timeline
ENV NODE_PATH ./src
ENV PORT 4000

EXPOSE $PORT

CMD ["npm", "run", "start"]
