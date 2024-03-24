import React from "react";

export default function BlogPost({
  params,
}: {
  params: { slug: string; id: string };
}) {
  return (
    <div>
      {params.slug}
      <br />
      {params.id}
    </div>
  );
}
