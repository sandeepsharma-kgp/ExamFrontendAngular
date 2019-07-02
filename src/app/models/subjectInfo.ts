export class SubjectInfoModel
{
	subjectName: string;
	class: string;

	board: string;
	SID: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}
