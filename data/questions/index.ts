import { SubjectQuestionBank } from "@/lib/types";
import { paiBank } from "./pai";
import { pancasilaBank } from "./pancasila";
import { matematikaBank } from "./matematika";
import { binggrisBank } from "./binggris";
import { ipasBank } from "./ipas";
import { plbjBank } from "./plbj";
import { bindonesiaBank } from "./bindonesia";

export const allQuestionBanks: Record<string, SubjectQuestionBank> = {
  pai: paiBank as unknown as SubjectQuestionBank,
  pancasila: pancasilaBank as unknown as SubjectQuestionBank,
  matematika: matematikaBank as unknown as SubjectQuestionBank,
  binggris: binggrisBank as unknown as SubjectQuestionBank,
  ipas: ipasBank as unknown as SubjectQuestionBank,
  plbj: plbjBank as unknown as SubjectQuestionBank,
  bindonesia: bindonesiaBank as unknown as SubjectQuestionBank,
};

export {
  paiBank,
  pancasilaBank,
  matematikaBank,
  binggrisBank,
  ipasBank,
  plbjBank,
  bindonesiaBank,
};
