FROM openjdk:17-jdk-alpine

COPY /build/libs/kangjeongtaek-0.0.1-SNAPSHOT.jar myApp.jar

ENTRYPOINT ["java", "-jar","/myApp.jar"]