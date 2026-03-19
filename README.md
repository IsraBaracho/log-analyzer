# 📊 Log Analyzer

Sistema inteligente de análise de logs com múltiplas estruturas de dados implementadas do zero.

## 🎯 Objetivo

Este projeto foi desenvolvido para demonstrar:
- Implementação de estruturas de dados clássicas (Stack, Queue, Priority Queue, HashMap)
- Parser multi-formato de logs (Syslog, JSON, Apache/nginx)
- Análise e detecção de padrões em logs
- Boas práticas de TypeScript e arquitetura de software

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Modo desenvolvimento (hot reload)
npm run dev

# Compilar para produção
npm run build

# Rodar versão compilada
npm start

# Rodar testes
npm test

# Verificar código
npm run lint
```

## 📁 Estrutura do Projeto

```
log-analyzer/
├── src/
│   ├── data-structures/    # Estruturas de dados implementadas
│   ├── parsers/             # Parsers de diferentes formatos
│   ├── analyzers/           # Análise e detecção de padrões
│   ├── types/               # Definições de tipos TypeScript
│   └── index.ts             # Ponto de entrada
├── tests/                   # Testes unitários
├── examples/                # Exemplos de uso
└── logs/                    # Arquivos de log para teste
```

## 🛠️ Tecnologias

- TypeScript
- Node.js
- Jest (testes)
- ESLint (qualidade de código)

## 📝 Licença

MIT
