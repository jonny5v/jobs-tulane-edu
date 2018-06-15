export class Job {
  constructor(
      public posting_number: string,
      public name: string,
      public location: string,
      public open_date: string,
      public open_date_sortable: string,
      public open_date_display: string,
      public close_date: string,
      public close_date_display: string,
      public url: string,
      public unit_name: string,
      public posting_summary: string,
      public minimum_education: string,
      public preferred_qualifications: string,
      public employee_type: string) {
  }
}

interface ISearchItem {
  campusName: string;
  jobType: string;
  keyword: string;
}

export class SearchItem implements ISearchItem {
  public campusName: string;
  public jobType: string;
  public keyword: string;
  constuctor() {
  }
}

interface ISortItem {
  name: string;
  isAsc: boolean;
}

export class SortItem implements ISortItem {
  public name: string;
  public isAsc: boolean;
  constructor() {
  }
}