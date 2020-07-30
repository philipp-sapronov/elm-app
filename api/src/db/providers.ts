import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://phl:Qwerty@first.9tyc5.mongodb.net/first?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true },
      ),
  },
];
