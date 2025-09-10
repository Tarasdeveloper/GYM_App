import ExerciseCard from './ExerciseCard';
import SectionWrapper from './SectionWrapper';

export default function Workout({ workout }) {
    return (
        <SectionWrapper
            id={'workout'}
            header={'welcome to'}
            title={['The ', 'DANGER ', 'zone']}
        >
            <div className="flex flex-col gap-4">
                {workout.map((exercise, i) => (
                    <ExerciseCard key={i} i={i} exercise={exercise} />
                ))}
            </div>
        </SectionWrapper>
    );
}
