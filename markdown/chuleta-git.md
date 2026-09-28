# Guía Completa de Comandos Git

Esta chuleta reúne los comandos esenciales de Git organizados por categorías para que puedas consultarlos rápidamente en tu día a día como desarrollador.

## 1. Configuración Inicial

Configura tu identidad para que tus commits queden firmados correctamente.

git config --global user.name "Tu Nombre": Define el nombre de usuario asociado a tus commits.

git config --global user.email "tu.correo@ejemplo.com": Define el correo electrónico asociado a tus commits.

git config --global init.defaultBranch main: Establece por defecto que la rama principal se llame main.

git config --list: Muestra toda la configuración actual de Git en tu entorno.

## 2. Inicialización y Clonación

Crear o descargar un repositorio.

git init: Inicializa un repositorio de Git vacío en el directorio actual.

git clone <url>: Descarga un repositorio remoto completo en tu máquina local.

## 3. Control de Cambios Básicos (Staging y Commit)

Preparar y guardar tus cambios en la historia del repositorio.

git status: Muestra el estado actual de los archivos (modificados, preparados o sin seguimiento).

git diff: Permite visualizar los cambios exactos que aún no se han añadido al área de preparación (staging area).

git add <archivo>: Añade un archivo específico al área de preparación.

git add .: Prepara todos los cambios (archivos nuevos, modificados o eliminados) del directorio actual.

git commit -m "Mensaje descriptivo": Guarda los cambios preparados en el historial con un mensaje explicativo.

git commit -am "Mensaje": Combina el git add (solo para archivos ya rastreados) y el git commit en un solo paso.

## 4. Deshacer Cambios y Restauración

Recuperar el control cuando algo no sale como esperabas.

git restore --staged <archivo>: Saca un archivo del área de preparación sin perder los cambios realizados en el directorio de trabajo (working directory).

git restore <archivo>: Descarta los cambios locales no guardados en el directorio de trabajo y devuelve el archivo a su último estado confirmado.

git reset --soft HEAD~1: Deshace el último commit pero mantiene todos los cambios preparados en el área de trabajo.

git reset --hard HEAD~1: Deshace por completo el último commit y borra todos los cambios asociados (¡usar con precaución!).

## 5. Gestión de Archivos

Mover y eliminar ficheros manteniendo el seguimiento de Git.

git rm <archivo>: Elimina ficheros del disco y registra su borrado automáticamente para el próximo commit.

git mv <archivo_origen> <archivo_destino>: Renombra o mueve un archivo dentro del repositorio actualizando su seguimiento de forma limpia.

## 6. Ramas y Navegación (Branches)

Trabajar en paralelo y aislar funcionalidades.

git branch: Lista todas las ramas locales del repositorio.

git branch <nombre_rama>: Crea una nueva rama a partir de la rama actual.

git checkout <nombre_rama> / git switch <nombre_rama>: Cambia de rama activa.

git checkout -b <nombre_rama> / git switch -c <nombre_rama>: Crea una nueva rama y se cambia a ella de inmediato.

git branch -d <nombre_rama>: Elimina una rama local que ya ha sido fusionada.

## 7. Sincronización con Remotos (Push y Pull)

Trabajar y compartir código con repositorios remotos (como GitHub, GitLab, etc.).

git remote -v: Muestra los remotos configurados y sus URLs.

git remote add origin <url>: Conecta tu repositorio local con un repositorio remoto.

git fetch <remoto>: Descarga las últimas actualizaciones del remoto sin fusionarlas automáticamente en tu rama local.

git pull <remoto> <rama>: Descarga e integra (merge) los cambios del repositorio remoto en tu rama actual.

git push <remoto> <rama>: Sube tus commits locales al repositorio remoto.

git push -u origin <rama>: Sube la rama local y la vincula con el remoto para futuros push/pull automáticos.

## 8. Fusiones y Conflictos (Merge)

Unir caminos en tu historial.

git merge <nombre_rama>: Fusiona la rama especificada con la rama en la que te encuentras actualmente.

Resolución de conflictos: Si Git encuentra líneas modificadas en ambos lados, editará los archivos afectados marcando las diferencias (<<<<<<<, =======, >>>>>>>). Tras solucionarlo manualmente, debes hacer git add y un nuevo git commit.

## 9. Historial y Registros (Logs)

Inspeccionar el pasado de tu proyecto.

git log: Muestra el historial completo de commits de la rama actual.

git log --oneline: Muestra un resumen simplificado del historial (un commit por línea con su hash corto).

git log --graph --oneline --all: Muestra un gráfico ASCII completo con todas las ramas y fusiones del repositorio.

git blame <archivo>: Muestra línea por línea quién modificó por última vez cada parte de un archivo y en qué commit.