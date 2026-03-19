/**
 * 🎓 TIPOS DO PROJETO
 * 
 * Este arquivo define as "interfaces" (contratos) de dados do projeto.
 * É como criar um formulário: todo evento de log DEVE ter esses campos.
 */

/**
 * Níveis de severidade de um log
 * 
 * Ordem de prioridade (do mais grave ao menos):
 * CRITICAL > ERROR > WARNING > INFO > DEBUG
 */
export enum LogLevel {
  DEBUG = 'DEBUG',       // Informações de debug (muito detalhe)
  INFO = 'INFO',         // Informação normal
  WARNING = 'WARNING',   // Aviso, algo pode estar errado
  ERROR = 'ERROR',       // Erro que afetou alguma funcionalidade
  CRITICAL = 'CRITICAL', // Erro crítico, sistema pode estar quebrado
}

/**
 * Prioridades numéricas para a Priority Queue
 * Quanto MAIOR o número, MAIOR a prioridade
 */
export const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
  [LogLevel.CRITICAL]: 5,
  [LogLevel.ERROR]: 4,
  [LogLevel.WARNING]: 3,
  [LogLevel.INFO]: 2,
  [LogLevel.DEBUG]: 1,
};

/**
 * Tipos de eventos de log
 */
export enum LogEventType {
  CONNECTION = 'CONNECTION',       // Evento de conexão
  DISCONNECTION = 'DISCONNECTION', // Evento de desconexão
  ERROR = 'ERROR',                 // Erro genérico
  WARNING = 'WARNING',             // Aviso
  INFO = 'INFO',                   // Informação
  SYSTEM = 'SYSTEM',               // Evento do sistema
  NETWORK = 'NETWORK',             // Evento de rede
  SECURITY = 'SECURITY',           // Evento de segurança
  UNKNOWN = 'UNKNOWN',             // Não identificado
}

/**
 * Interface principal: representa UM evento de log
 * 
 * 🎓 Interface vs Type vs Class:
 * - Interface: contrato de dados (não vira código JS)
 * - Type: alias de tipo (não vira código JS)  
 * - Class: estrutura de dados + comportamento (vira código JS)
 */
export interface LogEvent {
  id: string;              // ID único do evento (vamos gerar com hash)
  timestamp: Date;         // Quando aconteceu
  level: LogLevel;         // Quão grave é
  type: LogEventType;      // Que tipo de evento
  message: string;         // Mensagem completa
  source?: string;         // De onde veio (hostname, IP, etc)
  metadata?: Record<string, unknown>; // Dados extras (flexível)
}

/**
 * Formato de log detectado pelo parser
 */
export enum LogFormat {
  SYSLOG = 'SYSLOG',       // Formato tradicional do Linux
  JSON = 'JSON',           // Logs em JSON (apps modernos)
  APACHE = 'APACHE',       // Apache access.log
  NGINX = 'NGINX',         // Nginx access.log
  CUSTOM = 'CUSTOM',       // Formato customizado
  UNKNOWN = 'UNKNOWN',     // Não conseguimos detectar
}

/**
 * Resultado do parsing de um arquivo
 */
export interface ParseResult {
  format: LogFormat;       // Formato detectado
  events: LogEvent[];      // Eventos extraídos
  errors: string[];        // Erros durante o parsing
  totalLines: number;      // Total de linhas processadas
  parsedLines: number;     // Linhas que conseguimos parsear
}

/**
 * Estatísticas de análise
 */
export interface LogStatistics {
  totalEvents: number;                        // Total de eventos
  eventsByLevel: Record<LogLevel, number>;    // Contagem por nível
  eventsByType: Record<LogEventType, number>; // Contagem por tipo
  timeRange: {                                // Período dos logs
    start: Date;
    end: Date;
  };
  errorRate: number;                          // Taxa de erro (0-1)
  eventsPerHour: number;                      // Média de eventos por hora
}

/**
 * Padrão detectado nos logs
 */
export interface LogPattern {
  type: 'REPETITION' | 'SEQUENCE' | 'ANOMALY'; // Tipo de padrão
  description: string;                         // Descrição do que foi detectado
  occurrences: number;                         // Quantas vezes apareceu
  events: LogEvent[];                          // Eventos envolvidos
  severity: LogLevel;                          // Gravidade do padrão
}
