import { Schema, model } from 'mongoose';

const scheam = new Schema({
    exchange_id: { type: String, uppercase: true},
    website: { type: String,},
    name: { type: String },
    data_start: { type: String },
    data_end: { type: String },
    data_quote_start: { type: String },
    data_quote_end: { type: String },
    data_symbols_count: { type: Number },
    volume_1hrs_usd: { type: Number },
    volume_1day_usd: { type: Number },
    volume_1mth_usd: { type: Number },

}, { timestamps: true });

export default model('exchanges', scheam)