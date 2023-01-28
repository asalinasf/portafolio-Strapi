module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf4391p4rebbnj4sp470-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_piii'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'fDBilytecYtfNkx88MhZqCp1PXWwLaru'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
