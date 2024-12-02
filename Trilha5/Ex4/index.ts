abstract class VoteSystem {
    protected candidates: Record<string, number>;

    constructor() {
        this.candidates = {}; 
    }


    addCandidate(candidate: string): void {
        if (!this.candidates[candidate]) {
            this.candidates[candidate] = 0;
        } else {
            console.log(`O candidato ${candidate} já está registrado.`);
        }
    }

   
    abstract voteFor(candidate: string): void;
    abstract getResult(): object;
}


class Ellection extends VoteSystem {
    voteFor(candidate: string): void {
        if (!this.candidates[candidate]) {
            console.log(`Candidato inválido: ${candidate}`);
        } else {
            this.candidates[candidate] += 1;
        }
    }

    getResult(): object {
        return { ...this.candidates };
    }
}


class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        if (!this.candidates[candidate]) {
            console.log(`Candidato inválido: ${candidate}`);
        } else {
            this.candidates[candidate] += 1;
        }
    }

    getResult(): object {
        
        const sortedCandidates = Object.entries(this.candidates)
            .sort(([, votesA], [, votesB]) => votesB - votesA)
            .map(([name, votes]) => ({ name, votes }));
        return sortedCandidates;
    }
}