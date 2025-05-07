# Guide de démarrage du projet

Ce projet peut être lancé à l'aide du script `build_and_start.sh`.

## Démarrage automatique avec `./build_and_start.sh`

### Prérequis
- **Docker** : Assurez-vous que Docker est installé et en cours d'exécution.
- **Docker Compose** : Nécessaire pour gérer les conteneurs multi-services.

### Étapes
1. Donnez les permissions d'exécution au script si ce n'est pas déjà fait :
   ```sh
   chmod +x ./build_and_start.sh
   ```
2. Exécutez le script :
   ```sh
   ./build_and_start.sh
   ```

### Accès aux services
Une fois le projet démarré, les services seront accessibles aux URL suivantes :

| Service       | URL                          |
|---------------|------------------------------|
| Front (Angular)    | **[http://localhost:4200](http://localhost:4200)** |
| Back (Nest.js)   | **[http://localhost:3000](http://localhost:3000)** |
| PostgreSQL DB | `localhost:5432`             |