> **OBS:** Antes de começar uma nova tarefa siga os passos abaixo:

## Passo 1: Atualizar a sua branch principal

```
git checkout main
git pull origin main
```

- `git checkout main`, serve pra mudar pra branch principal
- `git pull origin main`, serve pra atualizar o seu projeto de acordo com o que tá no github


## Passo 2: Criar a branch pra sua tarefa

Por exemplo, sua tarefa é fazer uma tela de login
```
git branch tela-login
git checkout tela-login
```
ou
```
git checkout -b tela-login
```

- `git branch <nome-da-branch>`, serve pra criar uma nova branch
- `git checkout <nome-da-branch>`, serve pra mudar de branch
- `git checkout -b <nome-da-branch>`, é uma junção dos dois comandos anteriores


## Passo 3: Resolva a sua task
Crie e/ou Modifique os codigos que vão fazer a sua task ser realizada, ou seja, satisfaça as demandas da task

> **Dica**: fique commitando (git commit -m "") as suas alterações vez ou outra

## Passo 4: Abra o pull request
Faça o que sempre com git:

```
git add .
git commit -m "Criando nova tela de login"
git push origin tela-login
```

Agora voce vai no github, na aba Pull Requests, e abre o seu Pull Request. 



