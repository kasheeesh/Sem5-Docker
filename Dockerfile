FROM node
WORKDIR /app
# COPY . .
#first dot represents src and second dot is dest
COPY . /app
# RUN npm install
ARG NODE_ENV
RUN if ["${NODE_ENV}" = "development"]; \
then npm install; \
else npm install --only=production; \
fi


ENV PORT 4000
EXPOSE ${PORT}

# CMD ["npm", "start"]
CMD ["node", "server.js"]



