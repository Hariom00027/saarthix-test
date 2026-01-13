FROM gradle:8.5-jdk17-alpine AS build

WORKDIR /app

USER root
RUN apk add --no-cache ca-certificates bind-tools && update-ca-certificates

COPY build.gradle ./
COPY gradle ./gradle
COPY gradle.properties ./gradle.properties
COPY gradlew ./
COPY gradlew.bat ./
COPY src ./src

RUN chown -R gradle:gradle /app
USER gradle

RUN gradle build --no-daemon --refresh-dependencies || \
    (sleep 5 && gradle build --no-daemon --refresh-dependencies) || \
    (sleep 10 && gradle build --no-daemon)

FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8081

CMD ["java", "-jar", "app.jar"]

