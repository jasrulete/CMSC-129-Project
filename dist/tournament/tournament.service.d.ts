import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
export declare class TournamentService {
    private tournaments;
    register(createTournamentDto: CreateTournamentDto): Promise<{
        message: string;
        data: CreateTournamentDto;
    }>;
    create(createTournamentDto: CreateTournamentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTournamentDto: UpdateTournamentDto): string;
    remove(id: number): string;
}
