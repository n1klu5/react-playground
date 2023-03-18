interface Props {
  errorMessage: string;
}

export const Error = ({ errorMessage }: Props) => (
  <div className="flex h-full w-full items-center justify-center rounded bg-red-200 p-4">
    <h4 className="text-lg text-red-800">{errorMessage}</h4>
  </div>
);
