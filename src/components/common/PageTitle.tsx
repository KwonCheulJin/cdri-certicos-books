import Typography from '@/components/common/Typography';

interface Props {
  title: string;
}
export default function PageTitle({ title }: Props) {
  return (
    <Typography variant="title2" style={{ marginBottom: 16, height: 36 }}>
      {title}
    </Typography>
  );
}
