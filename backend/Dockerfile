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

# Copy all JARs to a temporary directory
COPY --from=build /app/build/libs/*.jar /app/

# Find and rename the boot JAR (exclude plain JARs)
# Spring Boot creates both *-SNAPSHOT.jar (boot JAR) and *-SNAPSHOT-plain.jar
RUN find /app -maxdepth 1 -name "*.jar" ! -name "*-plain.jar" -exec mv {} app.jar \; && \
    if [ ! -f app.jar ]; then \
        echo "ERROR: Boot JAR not found!" && \
        ls -la /app/*.jar && \
        exit 1; \
    fi

EXPOSE 8081

CMD ["java", "-jar", "app.jar"]

