import { IconName } from '../icon';
import { ProgramName } from '../program';

export type IconTitleCard = {

	/** Program name. */
	readonly programName: ProgramName;

	/** Title. */
	readonly title: string;

	/** Icon. */
	readonly icon: IconName;

	/** Route.  */
	readonly route?: string;
};
